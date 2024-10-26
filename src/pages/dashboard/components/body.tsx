import Dustbin from "./dustbin";
import GenerateComponent from "./generate-component";
import useTemplateStore from "../../../store/template";

const Body = () => {
  const template = useTemplateStore((state) => state.template);
  return (
    <Dustbin path="">
      {template.map((node, index) => (
        <GenerateComponent key={index} node={node} path={index.toString()} />
      ))}
    </Dustbin>
  );
};

export default Body;
