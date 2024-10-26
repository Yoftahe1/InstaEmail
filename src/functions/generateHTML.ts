import JSONNode from "../types/generator";

const tagMap = {
  container: "div",
  text: "p",
  button: "button",
  image: "img",
};

const generateHTML = (nodes: JSONNode[]) => {
  return nodes.map((node) => generateTag(node)).join(" ");
};

function generateTag(node: JSONNode) {
  const tag = tagMap[node.type];
  if (!tag) return "";

  let html = `<${tag}`;
  const styles: string[] = [];

  if (node.type === "container") {
    styles.push(`display: flex`);
    styles.push(`flex-direction: ${node.direction}`);
    styles.push(`align-items: ${node.align}`);
    styles.push(`justify-content: ${node.justify}`);
    styles.push(`gap: ${node.gap}px`);
  }

  if (node.type === "image") {
    html += ` src="${node.content}"`;
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

  if (node.fontWeight) {
    styles.push(`font-weight: ${node.fontWeight}`);
  }

  if (node.pt) {
    styles.push(`padding-top: ${node.pt}px`);
  }

  if (node.pl) {
    styles.push(`padding-left: ${node.pl}px`);
  }

  if (node.pb) {
    styles.push(`padding-bottom: ${node.pb}px`);
  }

  if (node.pr) {
    styles.push(`padding-right: ${node.pr}px`);
  }

  if (node.mt) {
    styles.push(`margin-top: ${node.mt}px`);
  }

  if (node.ml) {
    styles.push(`margin-left: ${node.ml}px`);
  }

  if (node.mb) {
    styles.push(`margin-bottom: ${node.mb}px`);
  }

  if (node.mr) {
    styles.push(`margin-right: ${node.mr}px`);
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
      html += generateTag(childNode);
    });
  }

  html += `</${tag}>`;

  return html;
}

export default generateHTML;
