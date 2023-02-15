import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
}: InputProps) => {
  return (
    <div>
      <S.Label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />
      <S.Input
        value={value}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
