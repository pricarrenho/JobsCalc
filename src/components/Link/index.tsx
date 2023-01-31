import { Link as LinkRoutes } from "react-router-dom";
import { ArrowLeft } from "../../assets/svg/ArrowLeft";
import { LinkProps } from "./types";

const icons = {
  ArrowLeft: <ArrowLeft color="#BFBFCC" />,
};

export const Link = ({ to, icon }: LinkProps) => {
  return <LinkRoutes to={to as any}>{icon && icons[icon]}</LinkRoutes>;
};
