import JSONNode from "../types/generator";

const tagMap = {
  container: "div",
  text: "p",
  button: "button",
  image: "img",
};

const generateHTML = (node: JSONNode): string => {
  if (!node || !node.type) return "";

  const tag = tagMap[node.type];
  if (!tag) return "";

  let html = `<${tag}`;
  let styles: string[] = [];

  if (node.type === "container") {
    styles.push(`display: flex`);
    styles.push(`flex-direction: ${node.direction}`);
    styles.push(`align-items: ${node.align}`);
    styles.push(`justify-content: ${node.justify}`);
  }

  if (node.type === "image") {
    html += `src="${node.content}"`;
  }

  if (node.color) {
    styles.push(`color: #${node.color}`);
  }

  if (node.bgColor) {
    styles.push(`background-color: #${node.bgColor}`);
  }

  if (node.radius) {
    styles.push(`border-radius: ${node.radius}px`);
  }

  if (node.fontSize) {
    styles.push(`font-size: ${node.fontSize}px`);
  }

  if (node.padding) {
    styles.push(`padding: ${node.padding}px`);
  }

  if (node.margin) {
    styles.push(`margin: ${node.margin}px`);
  }

  if (node.height) {
    styles.push(`height: ${node.height}px`);
  }

  if (node.width) {
    styles.push(`width: ${node.width}px`);
  }

  if (styles.length > 0) {
    html += ` style="${styles.join("; ")}"`;
  }

  if (node.alt) {
    html += `alt="${node.alt}"`;
  }

  html += ">";

  if (typeof node.content === "string" && node.type !== "image") {
    html += node.content;
  } else if (Array.isArray(node.content)) {
    node.content.forEach((childNode) => {
      html += generateHTML(childNode);
    });
  }

  html += `</${tag}>`;

  return html;
};

export default generateHTML