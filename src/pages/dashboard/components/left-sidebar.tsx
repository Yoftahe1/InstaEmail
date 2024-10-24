import { Tabs, Layout, theme, TabsProps } from "antd";

import Tree from "./tree";
import Components from "./components";

import styles from "../dashboard.module.css";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Components",
    children: <Components />,
  },
  {
    key: "2",
    label: "Component Tree",
    children: <Tree />,
  },
];

const { Sider } = Layout;

const LeftSidebar = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();

  return (
    <Sider
      width={350}
      style={{
        background: colorBgContainer,
        borderRight: "1px solid #fff",
        borderColor: colorBorder,
      }}
      className={styles.sidebar}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </Sider>
  );
};

export default LeftSidebar;
