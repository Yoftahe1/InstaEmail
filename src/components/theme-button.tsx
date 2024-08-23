import { Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

import useThemeStore from "../store/theme";

const ThemeButton = () => {
  const mode = useThemeStore((state) => state.mode);
  const changeMode = useThemeStore((state) => state.changeMode);

  function handleModeChange() {
    if (mode === "light") changeMode("dark");
    else changeMode("light");
  }

  return (
    <Button
      icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
      onClick={handleModeChange}
    />
  );
};

export default ThemeButton;
