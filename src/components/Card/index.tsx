import { Button } from "../Button";
import { CardProps } from "./types";
import { useNavigate } from "react-router-dom";
import money from "../../assets/img/money.png";
import * as S from "./styles";

export const Card = ({ children, active, handleSubmit }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

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
          Salvar
        </Button>
        <Button styleType="gray" onClick={handleClick}>
          Cancelar
        </Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};
