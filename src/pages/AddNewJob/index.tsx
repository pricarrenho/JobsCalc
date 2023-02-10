import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";

export const AddNewJob = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const { setJobList, useValueHour, jobList } = useGlobalContext();

  const totalHourJob = Math.ceil(Number(totalHours) / Number(hoursPerDay));
  const totalValue = Number(useValueHour) * Number(totalHours);

  const handleClick = () => {
    const jobs = {
      id: uuidv4(),
      name: name,
      daysLeft: totalHourJob,
      value: totalValue,
    };

    setJobList([...jobList, jobs]);
    navigate("/");
  };

  return (
    <div>
      <Header title="Adicionar Novo Job" goBackHeader />

      <Container>
        <S.Wrapper>
          <div>
            <Title children="Dados do Job" />
            <Input
              label="Nome do Job"
              name="name"
              type="text"
              onChange={setName}
            />

            <S.Input>
              <Input
                label="Quantas horas<br />por dia vai dedicar ao Job?"
                name="hoursPerDay"
                type="number"
                onChange={setHoursPerDay}
              />
              <Input
                label="Estimativa de<br />horas para esse job"
                name="totalHours"
                type="number"
                onChange={setTotalHours}
              />
            </S.Input>
          </div>

          <Card
            children="Preencha os dados ao lado para ver o valor do projeto"
            active
            handleSubmit={handleClick}
          />
        </S.Wrapper>
      </Container>
    </div>
  );
};
