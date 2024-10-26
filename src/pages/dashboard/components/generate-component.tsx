import { CSSProperties } from "react";

import Dustbin from "./dustbin";
import JSONNode from "../../../types/generator";
import useTemplateStore from "../../../store/template";

interface GenerateComponentI {
  node: JSONNode;
  path: string;
}

const GenerateComponent = ({ node, path }: GenerateComponentI) => {
  const setPath = useTemplateStore((state) => state.setPath);

  const style: CSSProperties = {
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

  function handleClick(event: React.MouseEvent, path: string) {
    event.stopPropagation();
// console.log(path)
    setPath(path);
  }

  switch (node.type) {
    case "container":
      return (
        <Dustbin
          path={path}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        >
          {Array.isArray(node.content) &&
            node.content.map((child, index) => (
              <GenerateComponent
                key={index}
                node={child}
                path={`${path}/${index}`}
              />
            ))}
        </Dustbin>
      );

    case "text":
      return (
        <p style={style} onClick={(e) => handleClick(e, path)} key={path}>
          {typeof node.content === "string" ? node.content : ""}
        </p>
      );

    case "button":
      return (
        <button style={style} onClick={(e) => handleClick(e, path)} key={path}>
          {typeof node.content === "string" ? node.content : ""}
        </button>
      );

    case "image":
      return (
        <img
          src={typeof node.content === "string" ? node.content : ""}
          alt={node.alt || ""}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        />
      );

    default:
      return <></>;
  }
};

export default GenerateComponent;
