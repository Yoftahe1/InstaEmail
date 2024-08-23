import { Layout, theme } from "antd";
import TextDetail from "./text-detail";
import ButtonDetail from "./button-detail";

import styles from "../dashboard.module.css"

const { Sider } = Layout;

const RightSidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={350} style={{ background: colorBgContainer }} className={styles.sidebar}>
      <ButtonDetail />
    </Sider>
  );
};

export default RightSidebar;
