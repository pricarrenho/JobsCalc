import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { Button } from "../Button";
import { Container } from "../Container";
import * as S from "./styles";

export const CardJob = () => {
  const navigate = useNavigate();
  const { nameJob } = useGlobalContext();

  const handleClick = () => {
    navigate("/edit-job");
  };

  return (
    <Container>
      <S.Wrapper>
        <S.FirstContent>
          <span>1</span>
          <h2>{nameJob}</h2>
        </S.FirstContent>
        <S.MiddleContents>
          <span>Prazo</span>
          <p>3 dias para entrega</p>{" "}
        </S.MiddleContents>
        <S.MiddleContents>
          <span>Valor</span>
          <p>R$ 4500,00</p>
        </S.MiddleContents>
        <S.ContainerStatus>
          <S.ContentStatus>
            <p>Em Andamento</p>
          </S.ContentStatus>
        </S.ContainerStatus>
        <S.ContentButtons>
          <Button
            styleType="white"
            icon="pencil"
            fullWidth
            onClick={handleClick}
          />
          <Button styleType="white" icon="trash" fullWidth />
        </S.ContentButtons>
      </S.Wrapper>
    </Container>
  );
};
