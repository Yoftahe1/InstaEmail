import { Layout ,theme } from "antd";

import styles from './dashboard.module.css'
import Grid from "./grid";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.dashboard}>
      <Header style={{ display: "flex", alignItems: "center" }} >
        <div>melata</div>
      </Header>
      <Layout>
        <Sider width={350} style={{ background: colorBgContainer }}>
          <Grid/>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
