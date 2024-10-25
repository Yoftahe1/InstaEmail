import { theme } from "antd";
import { useDrop } from "react-dnd";
import { CSSProperties, ReactNode, MouseEvent } from "react";

import JSONNode from "../../../types/generator";
import useTemplateStore from "../../../store/template";

import styles from "../dashboard.module.css";

interface DustbinProps {
  children?: ReactNode;
  style?: CSSProperties;
  path: string;
  onClick?: (event: MouseEvent) => void;
}

const Dustbin = ({ children, onClick, style, path }: DustbinProps) => {
  const addComponent = useTemplateStore((state) => state.addComponent);

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: "component",
    drop: (item: { component: JSONNode }, monitor) => {
      if (monitor.didDrop()) return;

      console.log(path);
      addComponent(item.component, "");
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }));

  return (
    <div
      ref={drop}
      onClick={onClick}
      style={{
        border: isOverCurrent && isOver ? "1px solid #1677ff" : "none",
        background: !style ? colorBgLayout : "",
        ...style,
      }}
      className={!style ? styles.body : ""}
    >
      {children}
    </div>
  );
};

export default Dustbin;
