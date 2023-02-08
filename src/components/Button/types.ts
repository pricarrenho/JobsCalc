import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: string;
  styleType: "red" | "green" | "gray" | "orange" | "white";
  fullWidth?: boolean;
  icon?: "trash" | "plusSign" | "pencil";
  to?: string;
  secondText?: string;
  as?: React.ElementType;
} & ButtonType;
