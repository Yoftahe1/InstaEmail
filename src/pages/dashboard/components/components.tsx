import { useDrag } from "react-dnd";
import { Col, Row, Typography } from "antd";

import components from "../../../constants/components";

import styles from "../dashboard.module.css";
import JSONNode from "../../../types/generator";

const { Text } = Typography;

const Components = () => {
  return (
    <Row gutter={[16, 16]}>
      {components.map((component) => (
        <Component key={component.name} component={component.value} />
      ))}
    </Row>
  );
};

export default Components;

function Component({ component }: { component: JSONNode }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { component },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Col sm={{ flex: "50%" }}>
      <div
        ref={drag}
        style={{ opacity: isDragging ? 0.4 : 1 }}
        className={styles.col}
      >
        <Text>{component.type}</Text>
      </div>
    </Col>
  );
}
