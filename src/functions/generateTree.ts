import { TreeDataNode } from "antd";

import JSONNode from "../types/generator";

function generateTree(
  data: JSONNode[],
  parentKey?: string 
): TreeDataNode[] {
  return data.map((item, index) => {
    const key = parentKey ? `${parentKey}/${index}` : index.toString();

    const node: TreeDataNode = {
      title: item.type,
      key: key,
    };

    if (item.content && Array.isArray(item.content)) {
      node.children = generateTree(item.content, key);
    }

    return node;
  });
}

export default generateTree;
