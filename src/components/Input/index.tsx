import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ name, type, placeholder, label }: InputProps) => {
  return (
    <div>
      <S.Label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
      <S.Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
