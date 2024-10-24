import React from "react";
import JSONNode from "../types/generator";
import useTemplateStore from "../store/template";

// Function to generate JSX from JSONNode with path tracking
const generateJSX = (node: JSONNode | null, path: string = ""): JSX.Element => {
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

  // Handle component selection and pass the path
  const handleClick = (
    event: React.MouseEvent,
    component: JSONNode,
    path: string
  ) => {
    event.stopPropagation(); // Prevent bubbling up

    console.log(path, path.split("/"));

    useTemplateStore.getState().selectComponent(component, path); // Select the clicked component
  };

  // Switch case to return the correct JSX based on the node type
  switch (node.type) {
    case "container":
      return (
        <div
          style={style}
          onClick={(e) =>
            handleClick(e, { ...node, content: "" }, path)
          }
        >
          {Array.isArray(node.content) &&
            node.content.map((child, index) => (
              <React.Fragment key={index}>
                {generateJSX(child, `${path}/${index}`)}
              </React.Fragment>
            ))}
        </div>
      );

    case "text":
      return (
        <p style={style} onClick={(e) => handleClick(e, node, path)}>
          {typeof node.content === "string" ? node.content : ""}
        </p>
      );

    case "button":
      return (
        <button style={style} onClick={(e) => handleClick(e, node, path)}>
          {typeof node.content === "string" ? node.content : ""}
        </button>
      );

    case "image":
      return (
        <img
          src={typeof node.content === "string" ? node.content : ""}
          alt={node.alt || ""}
          style={style}
          onClick={(e) => handleClick(e, node, path)}
        />
      );

    default:
      return <></>;
  }
};

export default generateJSX;
