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
  gap?: number;
  alt?: string;
  color?: string;
  width?: number;
  height?: number;
  radius?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  bgColor?: string;
  fontSize?: number;
  fontWeight?: "lighter" | "bolder" | "bold" | "normal";
  content?: JSONNode[] | string;
}
