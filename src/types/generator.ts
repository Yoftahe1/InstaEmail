export type NodeType = "container" | "text" | "button" | "image";

export default interface JSONNode {
  type: NodeType;
  direction?: "column" | "row";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alt?: string;
  color?: string;
  width?: number;
  height?: number;
  radius?: number;
  margin?: number;
  padding?: number;
  bgColor?: string;
  fontSize?: number;
  content?: JSONNode[] | string;
}
