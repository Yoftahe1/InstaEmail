import useTemplateStore from "../../../store/template";
import generateJSX from "../../../functions/generateJSX";

const Body = () => {
  const template = useTemplateStore((state) => state.template);
  return <>{generateJSX(template)}</>;
};

export default Body;
