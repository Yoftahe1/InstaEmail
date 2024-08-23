import { Layout, theme } from "antd";
import TextDetail from "./text-detail";

import styles from "../dashboard.module.css"

const { Sider } = Layout;

const RightSidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={350} style={{ background: colorBgContainer }} className={styles.sidebar}>
      <TextDetail />
    </Sider>
  );
};

export default RightSidebar;
