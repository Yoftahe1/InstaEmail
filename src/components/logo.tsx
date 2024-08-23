import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import useThemeStore from "../store/theme";
import logoWhite from "../assets/logo-white.svg";

const Logo = () => {
  const navigate = useNavigate();

  const mode = useThemeStore((state) => state.mode);

  return (
    <img
      onClick={() => navigate("/")}
      src={mode === "light" ? logo : logoWhite}
      style={{ width: 110, height: "auto" }}
      alt="logo"
    />
  );
};

export default Logo;
