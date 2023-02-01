import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import * as S from "./styles";

export const MyProfile = () => {
  return (
    <div>
      <Header title="Meu perfil" goBackHeader />

      <Container>
        <S.Wrapper>
          <S.LeftContentCard>
            <div>
              <div>Imagem</div>
              <h1>Priscilla</h1>
            </div>
            <div>
              <p>O valor da sua hora é R$ 75,00 reais</p>
              <Button styleType="green" fullWidth>
                Salvar Dados
              </Button>
            </div>
          </S.LeftContentCard>

          <div>
            <Title>Dados do perfil</Title>

            <S.InputFirstContent>
              <Input label="Nome" name="name" type="text" />
              <Input label="Link da foto" name="name" type="text" />
            </S.InputFirstContent>

            <Title>Planejamento</Title>

            <S.InputSecondContent>
              <Input
                label="Quanto eu<br />quero ganhar por mês?"
                placeholder="R$"
                name="planning"
                type="text"
              />
              <Input
                label="Quantas horas<br />quero trabalhar por dia?"
                name="hours"
                type="number"
              />
              <Input
                label="Quantos dias quero<br />trabalhar por semana?"
                name="days"
                type="number"
              />
              <Input
                label="Quantas semanas<br />por ano você quer tirar férias?"
                name="weeks"
                type="number"
              />
            </S.InputSecondContent>
          </div>
        </S.Wrapper>
      </Container>
    </div>
  );
};
