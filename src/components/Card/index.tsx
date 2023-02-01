import { Button } from "../Button";
import teste from "../../assets/img/money.png";
import * as S from "./styles";
import { CardProps } from "./types";

export const Card = ({ children, active }: CardProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Img
          src={teste}
          alt="Imagem de notas de dinheiro amarradas"
          active={active}
        />

        <S.Text>{children}</S.Text>
      </S.Content>

      <S.ButtonDiv>
        <Button styleType="green">SALVAR</Button>
        <Button styleType="gray" icon="trash"></Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};
