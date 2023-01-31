import { PlusSign } from "../../assets/svg/PlusSign";
import { Trash } from "../../assets/svg/Trash";
import * as S from "./styles";
import { ButtonProps } from "./types";

const icons = {
  trash: <Trash color="#787880" />,
  plusSign: <PlusSign color="#FCFDFF" />,
};

export const Button = ({
  children,
  styleType,
  fullWidth,
  icon,
}: ButtonProps) => {
  return (
    <S.Wrapper styleType={styleType} fullWidth={fullWidth}>
      {icon && icons[icon]} {children}
    </S.Wrapper>
  );
};
