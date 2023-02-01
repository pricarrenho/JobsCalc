import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import * as S from "./styles";

export const EditJob = () => {
  return (
    <div>
      <Header title="Adicionar Novo Job" goBackHeader />

      <Container>
        <S.Wrapper>
          <div>
            <Title children="Dados do Job" />
            <Input label="Nome do Job" name="name" type="text" />
            <S.Input>
              <Input
                label="Quantas horas<br />por dia vai dedicar ao Job?"
                name="hoursPerDay"
                type="number"
              />
              <Input
                label="Estimativa de<br />horas para esse job"
                name="totalHours"
                type="number"
              />
            </S.Input>
          </div>

          <Card children="Preencha os dados ao lado para ver o valor do projeto" />
        </S.Wrapper>
      </Container>
    </div>
  );
};
