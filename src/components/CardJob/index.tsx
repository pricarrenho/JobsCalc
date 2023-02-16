import { useNavigate } from "react-router-dom";
import { convertToCurrency } from "../../utils/convertCurrency";
import { Button } from "../Button";
import { Container } from "../Container";
import { CardJobProps } from "./types";
import { JobStatus } from "../JobStatus";
import * as S from "./styles";

export const CardJob = ({
  id,
  position,
  name,
  daysLeft,
  value,
  jobsStatus,
  deleteButton,
}: CardJobProps) => {
  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate("/edit-job", { state: { id } });
  };

  return (
    <Container>
      <S.Wrapper>
        <S.FirstContent>
          <span>{position}</span>
          <h2>{name}</h2>
        </S.FirstContent>

        <S.MiddleContents>
          <span>Prazo</span>

          <p>
            {daysLeft} dia{daysLeft > 1 && "s"} para entrega
          </p>
        </S.MiddleContents>

        <S.MiddleContents>
          <span>Valor</span>
          <p>{convertToCurrency(value)}</p>
        </S.MiddleContents>

        <S.ContainerStatus>
          <JobStatus type={jobsStatus}></JobStatus>
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
            onClick={deleteButton}
          />
        </S.ContentButtons>
      </S.Wrapper>
    </Container>
  );
};
