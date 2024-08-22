import { Layout } from "antd";

import styles from "./dashboard.module.css";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className={styles.dashboard}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div>melata</div>
      </Header>
      <Layout>
        <LeftSidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>Content</Content>
        </Layout>
        <RightSidebar/>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
