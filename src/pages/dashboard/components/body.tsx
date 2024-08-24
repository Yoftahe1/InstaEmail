import JSONNode from "../../../types/generator";
import generateJSX from "../../../functions/generateJSX";

const Body = () => {
  const json: JSONNode = {
    type: "container",
    align: "center",
    justify: "center",
    direction: "column",
    bgColor: "0000ff",
    height: 500,
    content: [
      {
        type: "image",
        width: 200,
        radius: 50,
        content:
          "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "button",
        width: 200,
        radius: 50,
        content:
          "submit",
      },
      {
        type: "text",
        width: 200,
        radius: 50,
        content:
          "Heloo",
      },
    ],
  };
  return <>{generateJSX(json)}</>;
};

export default Body;
