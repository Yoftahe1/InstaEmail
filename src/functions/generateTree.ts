import { TreeDataNode } from "antd";

import JSONNode from "../types/generator";

function generateTree(node: JSONNode, key: string = ""): TreeDataNode {
  const { type, content } = node;

  const treeNode: TreeDataNode = {
    title: type,
    key: key,
  };

  if (Array.isArray(content)) {
    treeNode.children = content.map((childNode, index) =>
      generateTree(childNode, `${key}/${index}`)
    );
  }

  return treeNode;
}

export default generateTree;
