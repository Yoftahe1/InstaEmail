import React from "react";

import JSONNode, { NodeType } from "../types/generator";
import useComponentStore from "../store/component";

const generateJSX = (node: JSONNode): JSX.Element => {
  const changeComponent = useComponentStore((state) => state.changeComponent);

  if (!node || !node.type) return <></>;

  const style: React.CSSProperties = {
    color: node.color ? `#${node.color}` : undefined,
    backgroundColor: node.bgColor ? `#${node.bgColor}` : undefined,
    borderRadius: node.radius ? `${node.radius}px` : undefined,
    fontSize: node.fontSize ? `${node.fontSize}px` : undefined,
    padding: node.padding ? `${node.padding}px` : undefined,
    margin: node.margin ? `${node.margin}px` : undefined,
    width: node.width ? `${node.width}px` : undefined,
    height: node.height ? `${node.height}px` : undefined,
    display: node.type === "container" ? "flex" : undefined,
    flexDirection: node.direction,
    alignItems: node.align,
    justifyContent: node.justify,
  };

  const handleClick = (event: React.MouseEvent, type: NodeType) => {
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
    changeComponent(type);
  };

  switch (node.type) {
    case "container":
      return (
        <div style={style} onClick={(e) => handleClick(e, "container")}>
          {Array.isArray(node.content) &&
            node.content.map((child, index) => (
              <React.Fragment key={index}>{generateJSX(child)}</React.Fragment>
            ))}
        </div>
      );

    case "text":
      return (
        <p style={style} onClick={(e) => handleClick(e, "text")}>
          {typeof node.content === "string" ? node.content : null}
        </p>
      );

    case "button":
      return (
        <button style={style} onClick={(e) => handleClick(e, "button")}>
          {typeof node.content === "string" ? node.content : null}
        </button>
      );

    case "image":
      return (
        <img
          src={typeof node.content === "string" ? node.content : ""}
          alt={node.alt}
          style={style}
          onClick={(e) => handleClick(e, "image")}
        />
      );

    default:
      return <></>;
  }
};

export default generateJSX;
