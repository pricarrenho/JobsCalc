import { useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { convertToCurrency } from "../../utils/convertCurrency";
import yourPhoto from "../../assets/img/photo.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export const MyProfile = () => {
  const navigate = useNavigate();
  const { setProfileName, setProfilePhoto, setValueJob } = useGlobalContext();

  const [yourName, setYourName] = useState("");
  const [photo, setPhoto] = useState("");
  const [value, setValue] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [weeks, setWeeks] = useState("");

  const dataFilled = value && days && hours;

  const valorTotal = (Number(value) / Number(days) / Number(hours)).toFixed(2);

  const secondText = "Salve";

  const handleClick = () => {
    navigate("/home");
    setProfileName(yourName);
    setProfilePhoto(photo);
    setValueJob(Number(valorTotal));
  };

  return (
    <div>
      <Header title="Meu perfil" goBackHeader />

      <Container>
        <S.Wrapper>
          <S.LeftContentCard>
            {photo ? (
              <S.Img
                src={photo}
                alt="Imagem da foto selecionada pelo usuário"
              />
            ) : (
              <S.Img src={yourPhoto} alt="Imagem do ícone de um usuário" />
            )}
            <h2>{yourName}</h2>

            <p>
              {dataFilled ? (
                <>
                  O valor da sua hora é{" "}
                  <span>{convertToCurrency(valorTotal)}</span>
                </>
              ) : (
                "Preencha os campos para saber seu valor/hora."
              )}
            </p>

            <Button
              styleType="green"
              fullWidth
              secondText={secondText}
              onClick={handleClick}
              // disabled={!yourName || !value || !hours || !days || !weeks}
            >
              Salvar Dados
            </Button>
          </S.LeftContentCard>

          <div>
            <Title>Dados do perfil</Title>

            <S.InputFirstContent>
              <Input
                label="Nome"
                name="name"
                type="text"
                onChange={setYourName}
              />

              <Input
                label="Link da foto"
                name="name"
                type="text"
                onChange={setPhoto}
              />
            </S.InputFirstContent>

            <Title>Planejamento</Title>

            <S.InputSecondContent>
              <Input
                label="Quanto eu<br />quero ganhar por mês?"
                placeholder="R$"
                name="planning"
                type="text"
                onChange={setValue}
              />

              <Input
                label="Quantas horas<br />quero trabalhar por dia?"
                name="hours"
                type="number"
                onChange={setHours}
              />

              <Input
                label="Quantos dias quero<br />trabalhar por semana?"
                name="days"
                type="number"
                onChange={setDays}
              />

              <Input
                label="Quantas semanas<br />por ano você quer tirar férias?"
                name="weeks"
                type="number"
                onChange={setWeeks}
              />
            </S.InputSecondContent>
          </div>
        </S.Wrapper>
      </Container>
    </div>
  );
};
