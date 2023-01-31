import logo from "../../assets/img/logo.png";
import { LogoProps } from "./types";

export const Logo = ({ width }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Logo do site onde tem o desenho de uma calculadora e ao lado escrito JobsCalc"
      width={width}
    />
  );
};
