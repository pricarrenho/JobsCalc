import { PlusSign } from "../../assets/svg/PlusSign";
import { Trash } from "../../assets/svg/Trash";
import { ButtonProps } from "./types";
import { Pencil } from "../../assets/svg/Pencil";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  fullWidth,
  icon,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const icons = {
    trash: <Trash color={theme.colors.gray600} size={24} />,
    plusSign: <PlusSign color="#FCFDFF" size={32} />,
    pencil: <Pencil color="#787880" size={24} />,
  };

  return (
    <S.Wrapper styleType={styleType} fullWidth={fullWidth} {...props}>
      {icon && icons[icon]} {children}
    </S.Wrapper>
  );
};
