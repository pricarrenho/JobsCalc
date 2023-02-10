import { Button } from "../Button";
import money from "../../assets/img/money.png";
import { CardProps } from "./types";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { CardJob } from "../CardJob";
import * as S from "./styles";

export const Card = ({
  children,
  active,
  name,
  hoursPerDay,
  totalHours,
}: CardProps) => {
  const navigate = useNavigate();
  const { setNameJob, setComponent, component, setDeadline, setTotalJobHours } =
    useGlobalContext();

  const totalDays = Number(totalHours) / Number(hoursPerDay);

  const handleClick = () => {
    navigate("/home");
    setNameJob(name);
    setComponent([...component, <CardJob />]);
    setDeadline(totalDays);
    setTotalJobHours(Number(totalHours));
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
        <Button
          styleType="green"
          onClick={handleClick}
          // disabled={!name || !hoursPerDay || !totalHours}
        >
          SALVAR
        </Button>
        <Button styleType="gray" icon="trash"></Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};
