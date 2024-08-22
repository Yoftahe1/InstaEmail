import { Col, Row } from "antd";
import styles from "./dashboard.module.css";

const Grid = () => {
  return (
    <Row className={styles.row} gutter={[16, 16]}>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
      <Col sm={{ flex: "50%" }}>
        <div className={styles.col}>col</div>
      </Col>
    </Row>
  );
};

export default Grid;
