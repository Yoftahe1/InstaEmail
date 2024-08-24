import { Button, Flex, Layout, theme } from "antd";

import Logo from "../../components/logo";
import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";
import ThemeButton from "../../components/theme-button";

import styles from "./dashboard.module.css";

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
        <Layout className={styles.body}>
          <Content>Content</Content>
        </Layout>
        <RightSidebar />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
