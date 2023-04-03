import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";

import { Title } from "../../components/Title";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";
import Footer from "../../components/Footer";

type CustomizedEditJobRouterState = {
  id: string;
};

export const EditJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedEditJobRouterState;
  const { jobList, handleJobList, profileData } = useGlobalContext();

  const selectedJob = jobList.filter((item) => item.id === state.id)[0];

  const [name, setName] = useState(selectedJob.name);
  const [hoursPerDay, setHoursPerDay] = useState(selectedJob.hoursPerDay);
  const [totalHours, setTotalHours] = useState(selectedJob.totalHours);
  const [jobsStatus, setJobsStatus] = useState<"pendent" | "started" | "done">(
    selectedJob.jobsStatus
  );

  const daysLeft = Math.ceil(Number(totalHours) / Number(hoursPerDay));
  const valuePerHour = profileData?.valuePerDay;
  const totalValue = Number(valuePerHour) * Number(totalHours);

  const handleClick = () => {
    handleJobList(
      jobList.map((item) => {
        if (item.id === selectedJob.id) {
          return {
            id: selectedJob.id,
            name: name,
            daysLeft: daysLeft,
            value: totalValue,
            hoursPerDay: hoursPerDay,
            totalHours: totalHours,
            jobsStatus: jobsStatus,
          };
        } else {
          return item;
        }
      })
    );
    navigate("/");
  };

  return (
    <div>
      <Header title="Editar Job" goBackHeader />

      <Container>
        <S.Wrapper>
          <div>
            <Title children="Dados do Job" />
            <S.FirstInput>
              <Input
                label="Nome do Job"
                name="name"
                value={name}
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
              children="Preencha os dados ao lado para ver o valor do projeto"
              handleSubmit={handleClick}
            />
          </S.ContentCard>
        </S.Wrapper>
      </Container>

      <Footer />
    </div>
  );
};
