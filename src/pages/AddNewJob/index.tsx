import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { InputRadio } from "../../components/InputRadio";
import * as S from "./styles";
import Footer from "../../components/Footer";

export const AddNewJob = () => {
  const navigate = useNavigate();
  const { jobList, profileData, handleJobList } = useGlobalContext();

  const [name, setName] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [jobsStatus, setJobsStatus] = useState<"pendent" | "started" | "done">(
    "pendent"
  );

  const daysLeft = Math.ceil(Number(totalHours) / Number(hoursPerDay));
  const valuePerHour = profileData?.valuePerDay;
  const totalValue = Number(valuePerHour) * Number(totalHours);

  const handleClick = () => {
    const jobs = {
      id: uuidv4(),
      name: name,
      daysLeft: daysLeft,
      value: totalValue,
      hoursPerDay: hoursPerDay,
      totalHours: totalHours,
      jobsStatus: jobsStatus,
    };

    if (jobList) {
      handleJobList([...jobList, jobs]);
    } else {
      handleJobList([jobs]);
    }

    navigate("/");
  };

  return (
    <div>
      <Header title="Adicionar Novo Job" goBackHeader />

      <Container>
        <S.Wrapper>
          <div>
            <Title children="Dados do Job" />
            <S.FirstInput>
              <Input
                value={name}
                label="Nome do Job"
                name="name"
                type="text"
                onChange={setName}
              />
            </S.FirstInput>

            <S.Input>
              <Input
                value={hoursPerDay}
                label="Quantas horas<br />por dia vai dedicar ao Job?"
                name="hoursPerDay"
                type="number"
                onChange={setHoursPerDay}
              />
              <Input
                value={totalHours}
                label="Estimativa de<br />horas para esse job"
                name="totalHours"
                type="number"
                onChange={setTotalHours}
              />
            </S.Input>

            <Title>Escola o status do Job</Title>
            <S.InputCheckBox>
              <InputRadio
                option={[
                  { value: "pendent", label: "Não iniciado" },
                  { value: "started", label: "Em andamento" },
                  { value: "done", label: "Encerrado" },
                ]}
                value={jobsStatus}
                name="opcao"
                onChange={setJobsStatus}
              />
            </S.InputCheckBox>
          </div>

          <S.ContentCard>
            <Card
              children="Preencha os dados para ver o valor do projeto"
              active
              handleSubmit={handleClick}
            />
          </S.ContentCard>
        </S.Wrapper>
      </Container>

      <Footer />
    </div>
  );
};
