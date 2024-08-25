import { Button, Flex, Layout, theme } from "antd";

import Logo from "../../components/logo";
import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";
import ThemeButton from "../../components/theme-button";

import styles from "./dashboard.module.css";
import Body from "./components/body";
import useTemplateStore from "../../store/template";

const Dashboard = () => {
  const component = useTemplateStore((state) => state.component);
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();
  return (
    <Layout className={styles.dashboard}>
      <Flex
        justify="space-between"
        style={{
          background: colorBgContainer,
          borderColor: colorBorder,
        }}
        className={styles.header}
      >
        <Logo />
        <Flex gap={10}>
          <ThemeButton />
          <Button type="primary">Copy Template</Button>
        </Flex>
      </Flex>
      <Layout>
        <LeftSidebar />
        <Layout className={styles.body}>
          <Body />
        </Layout>
        {component && <RightSidebar />}
      </Layout>
    </Layout>
  );
};

export default Dashboard;
