import { TitleProps } from "./types";
import * as S from "./styles";

export const Title = ({ children }: TitleProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
