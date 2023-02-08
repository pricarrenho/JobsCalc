import { Button } from "../Button";
import teste from "../../assets/img/money.png";
import { CardProps } from "./types";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Card = ({
  children,
  active,
  name,
  hoursPerDay,
  totalHours,
}: CardProps) => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/home");
  };

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
        <Button
          styleType="green"
          onClick={handleChange}
          disabled={!name || !hoursPerDay || !totalHours}
        >
          SALVAR
        </Button>
        <Button styleType="gray" icon="trash"></Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};
