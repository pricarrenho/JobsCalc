import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { convertToCurrency } from "../../utils/convertCurrency";
import { Button } from "../Button";
import { Container } from "../Container";
import { CardJobProps } from "./types";
import * as S from "./styles";

export const CardJob = ({ id, name, daysLeft, value }: CardJobProps) => {
  const navigate = useNavigate();
  const { setOpenModal } = useGlobalContext();

  const handleClickEdit = () => {
    navigate("/edit-job");
  };

  const handleClickDelete = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      <S.Wrapper>
        <S.FirstContent>
          <span>{id}</span>
          <h2>{name}</h2>
        </S.FirstContent>
        <S.MiddleContents>
          <span>Prazo</span>
          <p>{daysLeft} dias para entrega</p>
        </S.MiddleContents>
        <S.MiddleContents>
          <span>Valor</span>
          <p>{convertToCurrency(value)}</p>
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
            onClick={handleClickEdit}
          />
          <Button
            styleType="white"
            icon="trash"
            fullWidth
            onClick={handleClickDelete}
          />
        </S.ContentButtons>
      </S.Wrapper>
    </Container>
  );
};
