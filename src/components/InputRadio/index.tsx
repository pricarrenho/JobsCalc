import { InputCheckBoxProps } from "./types";
import * as S from "./styles";

export const InputRadio = ({
  name,
  value,
  option,
  onChange,
}: InputCheckBoxProps) => {
  return (
    <>
      {option.map((item) => {
        return (
          <S.Content key={item.value}>
            <S.Input
              type="radio"
              checked={item.value === value}
              value={name}
              id={item.value}
              name={name}
              onChange={() => onChange(item.value as any)}
            />
            <S.Label
              htmlFor={item.value}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </S.Content>
        );
      })}
    </>
  );
};
