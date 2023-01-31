import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ name, type, placeholder, children }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{children}</S.Label>
      <S.Input name={name} type={type} placeholder={placeholder} />
    </S.Wrapper>
  );
};
