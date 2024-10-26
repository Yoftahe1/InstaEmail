import { ReactNode, useRef, useState } from "react";
import { HolderOutlined } from "@ant-design/icons";

const Hover = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={divRef}
      onMouseOver={(e) => {
        // console.log(children)

        setIsHovered(true);
      }}
      onMouseOut={() => setIsHovered(false)}
      style={{ display: "flex", alignItems: "center", gap: 10 }}
    >
      {isHovered && (
        <HolderOutlined color="red" style={{ color: "grey", fontSize: 18 }} />
      )}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default Hover;
