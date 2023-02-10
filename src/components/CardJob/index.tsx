import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { convertToCurrency } from "../../utils/convertCurrency";
import { Button } from "../Button";
import { Container } from "../Container";
import * as S from "./styles";

export const CardJob = () => {
  const navigate = useNavigate();
  const { nameJob, setOpenModal, deadline, valueJob, totalJobHours } =
    useGlobalContext();

  const handleClickEdit = () => {
    navigate("/edit-job");
  };

  const handleClickDelete = () => {
    setOpenModal(true);
  };

  const value = valueJob * totalJobHours;

  return (
    <Container>
      <S.Wrapper>
        <S.FirstContent>
          <span>1</span>
          <h2>{nameJob}</h2>
        </S.FirstContent>
        <S.MiddleContents>
          <span>Prazo</span>
          {deadline === 1 ? (
            <p>{deadline} dia para entrega</p>
          ) : (
            <p>{deadline} dias para entrega</p>
          )}
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
