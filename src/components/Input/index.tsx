import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ name, type, placeholder, children }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{children}</S.Label>
      <S.Input name={name} type={type} placeholder={placeholder} />
    </S.Wrapper>
  );
};
