import JSONNode from "../types/generator";

const components: {
  value: JSONNode;
  name: string;
}[] = [
  {
    value: { type: "button", content: "Submit", width: 150, height: 40 },
    name: "Button",
  },
  {
    value: {
      type: "container",
      direction: "column",
      height: 300,
      bgColor: "80808050",
      content: [],
    },
    name: "Container",
  },
  {
    name: "Image",
    value: {
      type: "image",
      height: 300,
      width: 300,
      bgColor: "80808050",
      content: "Please provide image source",
      radius: 20,
      alt: "Please provide image alt",
    },
  },
  {
    name: "Text",
    value: {
      type: "text",
      color: "000000",
      bgColor: "80808050",
      content: "Please provide text value",
    },
  },
];

export default components;
