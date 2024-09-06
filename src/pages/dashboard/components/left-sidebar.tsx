import { Col, Layout, Row, Typography, theme } from "antd";

import components from "../../../constants/components";

import styles from "../dashboard.module.css";
import { useDrag } from "react-dnd";
import { CSSProperties } from "react";

const { Sider } = Layout;
const { Text } = Typography;

const LeftSidebar = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();

  return (
    <Sider
      width={350}
      style={{
        background: colorBgContainer,
        borderRight: "1px solid #fff",
        borderColor: colorBorder,
      }}
      className={styles.sidebar}
    >
      <Row gutter={[16, 16]}>
        {components.map((component) => (
          <Card key={component} component={component} />
        ))}
      </Row>
    </Sider>
  );
};

export default LeftSidebar;

export const ItemTypes = {
  BOX: "box",
};

// const style: CSSProperties = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   cursor: 'move',
//   float: 'left',
// }

function Card({ component }: { component: string }) {
  const {
    token: { colorBorder },
  } = theme.useToken();

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
