import Dustbin from "./dustbin";

import useTemplateStore from "../../../store/template";
import generateJSX from "../../../functions/generateJSX";


const Body = () => {
  const template = useTemplateStore((state) => state.template);

  return <Dustbin path="">{...generateJSX(template)}</Dustbin>;
};

export default Body;
