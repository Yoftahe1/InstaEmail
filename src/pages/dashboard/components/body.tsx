import generateJSX from "../../../functions/generateJSX";
import useTemplateStore from "../../../store/template";

const Body = () => {
  const template=useTemplateStore(state=>state.template)
  return <>{generateJSX(template)}</>;
};

export default Body;
