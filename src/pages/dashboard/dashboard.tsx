import { SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, theme } from "antd";

import logo from "../../assets/logo.svg"

import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";

import styles from "./dashboard.module.css";
import ThemeButton from "../../components/theme-button";
import Logo from "../../components/logo";

const { Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.dashboard}>
        <Flex justify="space-between" style={{ background: colorBgContainer }} className={styles.header}>
          <Logo/>
          <Flex gap={10}> 
            <ThemeButton/>
            <Button type="primary">Copy Template</Button>
          </Flex>
        </Flex>
      <Layout>
        <LeftSidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>Content</Content>
        </Layout>
        <RightSidebar />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
