import { useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import * as S from "./styles";

export const EditJob = () => {
  const [name, setName] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [totalHours, setTotalHours] = useState("");

  return (
    <div>
      <Header title="Editar Job" goBackHeader />

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
            name={name}
            hoursPerDay={hoursPerDay}
            totalHours={totalHours}
          />
        </S.Wrapper>
      </Container>
    </div>
  );
};
