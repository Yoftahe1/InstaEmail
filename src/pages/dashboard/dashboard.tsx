import { SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, theme, Typography } from "antd";

import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";

import styles from "./dashboard.module.css";

const { Title } = Typography;
const { Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.dashboard}>
        <Flex justify="space-between" style={{ background: colorBgContainer }} className={styles.header}>
          <Title level={3} style={{ margin: 0 }}>
            InstaMail
          </Title>
          <Flex gap={10}> 
            <Button icon={<SunOutlined />} />
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
