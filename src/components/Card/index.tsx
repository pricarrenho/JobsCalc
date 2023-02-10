import { Button } from "../Button";
import { CardProps } from "./types";
import money from "../../assets/img/money.png";
import * as S from "./styles";

export const Card = ({ children, active, handleSubmit }: CardProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Img
          src={money}
          alt="Imagem de notas de dinheiro amarradas"
          active={active}
        />

        <S.Text>{children}</S.Text>
      </S.Content>

      <S.ButtonDiv>
        <Button styleType="green" onClick={handleSubmit}>
          SALVAR
        </Button>
        <Button styleType="gray" icon="trash"></Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};
