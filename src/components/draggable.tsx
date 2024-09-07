import { ReactNode } from "react";
import { useDrag, useDrop } from "react-dnd";

import JSONNode from "../types/generator";

const ItemTypes = {
  COMPONENT: "component",
};

interface DraggableProps {
  node: JSONNode;
  index: number;
  moveComponent: (fromIndex: number, toIndex: number) => void;
  children: ReactNode;
}

const Draggable: React.FC<DraggableProps> = ({
  node,
  index,
  moveComponent,
  children,
}) => {
  const [, dragRef] = useDrag({
    type: ItemTypes.COMPONENT,
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: ItemTypes.COMPONENT,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveComponent(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return <div ref={(el) => dragRef(dropRef(el))}>{children}</div>;
};

export default Draggable;
