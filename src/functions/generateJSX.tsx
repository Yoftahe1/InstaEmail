import React from "react";

import JSONNode from "../types/generator";
import useTemplateStore from "../store/template";

const generateJSX = (node: JSONNode | null): JSX.Element => {
  const selectComponent = useTemplateStore((state) => state.selectComponent);

  if (!node || !node.type) return <></>;

  const style: React.CSSProperties = {
    color: node.color ? `#${node.color}` : undefined,
    backgroundColor: node.bgColor ? `#${node.bgColor}` : undefined,
    borderRadius: node.radius ? `${node.radius}px` : undefined,
    fontSize: node.fontSize ? `${node.fontSize}px` : undefined,
    fontWeight: node.fontWeight,
    gap: node.gap ? `${node.gap}px` : undefined,
    paddingTop: node.pt ? `${node.pt}px` : undefined,
    paddingLeft: node.pl ? `${node.pl}px` : undefined,
    paddingBottom: node.pb ? `${node.pb}px` : undefined,
    paddingRight: node.pr ? `${node.pr}px` : undefined,
    marginTop: node.mt ? `${node.mt}px` : undefined,
    marginLeft: node.ml ? `${node.ml}px` : undefined,
    marginBottom: node.mb ? `${node.mb}px` : undefined,
    marginRight: node.mr ? `${node.mr}px` : undefined,
    width: node.width ? `${node.width}px` : undefined,
    height: node.height ? `${node.height}px` : undefined,
    display: node.type === "container" ? "flex" : undefined,
    flexDirection: node.direction,
    alignItems: node.align,
    justifyContent: node.justify,
  };

  const handleClick = (event: React.MouseEvent, type: JSONNode) => {
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
    selectComponent(type);
  };

  switch (node.type) {
    case "container":
      return (
        <div
          style={style}
          onClick={(e) => handleClick(e, { ...node, content: "" })}
        >
          {Array.isArray(node.content) &&
            node.content.map((child, index) => (
              <React.Fragment key={index}>{generateJSX(child)}</React.Fragment>
            ))}
        </div>
      );

    case "text":
      return (
        <p style={style} onClick={(e) => handleClick(e, { ...node })}>
          {typeof node.content === "string" ? node.content : null}
        </p>
      );

    case "button":
      return (
        <button style={style} onClick={(e) => handleClick(e, { ...node })}>
          {typeof node.content === "string" ? node.content : null}
        </button>
      );

    case "image":
      return (
        <img
          src={typeof node.content === "string" ? node.content : ""}
          alt={node.alt}
          style={style}
          onClick={(e) => handleClick(e, { ...node })}
        />
      );

    default:
      return <></>;
  }
};

export default generateJSX;
