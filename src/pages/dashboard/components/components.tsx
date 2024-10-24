import { useDrag } from "react-dnd";
import { Col, Row, Typography } from "antd";

import components from "../../../constants/components";

import styles from "../dashboard.module.css";

const { Text } = Typography;

const Components = () => {
  return (
    <Row gutter={[16, 16]}>
      {components.map((component) => (
        <Component key={component} component={component} />
      ))}
    </Row>
  );
};

export default Components;

export const ItemTypes = {
  BOX: "box",
};

function Component({ component }: { component: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Col sm={{ flex: "50%" }}>
      <div
        ref={drag}
        style={{ opacity }}
        className={styles.col}
        data-testid={`box`}
      >
        <Text>{component}</Text>
      </div>
    </Col>
  );
}
