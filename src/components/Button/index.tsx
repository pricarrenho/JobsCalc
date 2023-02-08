import { PlusSign } from "../../assets/svg/PlusSign";
import { Trash } from "../../assets/svg/Trash";
import { ButtonProps } from "./types";
import * as S from "./styles";
import { Pencil } from "../../assets/svg/Pencil";

const icons = {
  trash: <Trash color="#787880" size={24} />,
  plusSign: <PlusSign color="#FCFDFF" size={32} />,
  pencil: <Pencil color="#787880" size={24} />,
};

export const Button = ({
  children,
  styleType,
  fullWidth,
  icon,
  secondText,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper styleType={styleType} fullWidth={fullWidth} {...props}>
      {icon && icons[icon]} {children}
    </S.Wrapper>
  );
};
