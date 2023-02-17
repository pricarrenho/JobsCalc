import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "red" | "green" | "gray" | "orange" | "white";

export type ButtonProps = {
  children?: string;
  styleType: ButtonStyleType;
  fullWidth?: boolean;
  icon?: "trash" | "plusSign" | "pencil";
  to?: string;
  as?: React.ElementType;
} & ButtonType;
