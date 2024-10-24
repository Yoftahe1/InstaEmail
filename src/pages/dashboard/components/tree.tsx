import { Tree as AntTree } from "antd";
import { DownOutlined } from "@ant-design/icons";

import useTemplateStore from "../../../store/template";
import generateTree from "../../../functions/generateTree";

const Tree = () => {
  const template = useTemplateStore((state) => state.template);

  return (
    <AntTree
      showLine
      switcherIcon={<DownOutlined />}
      treeData={template ? [generateTree(template)] : undefined}
    />
  );
};

export default Tree;
