import { Tree as AntTree, TreeProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

import useTemplateStore from "../../../store/template";
import generateTree from "../../../functions/generateTree";

const Tree = () => {
  const template = useTemplateStore((state) => state.template);
  const setPath = useTemplateStore((state) => state.setPath);

  const onSelect: TreeProps["onSelect"] = (path) => {
    setPath(path[0].toString());
  };

  return (
    <AntTree
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      treeData={generateTree(template)}
    />
  );
};

export default Tree;
