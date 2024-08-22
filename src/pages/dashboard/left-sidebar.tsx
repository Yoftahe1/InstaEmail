import { Col, Layout, Row, theme } from "antd";

import components from "../../constants/components";

import styles from "./dashboard.module.css";

const { Sider } = Layout;

const LeftSidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={350} style={{ background: colorBgContainer }} className={styles.sidebar}>
      <Row  gutter={[16, 16]}>
        {components.map((component) => (
          <Col key={component} sm={{ flex: "50%" }}>
            <div className={styles.col}>{component}</div>
          </Col>
        ))}
      </Row>
    </Sider>
  );
};

export default LeftSidebar;
