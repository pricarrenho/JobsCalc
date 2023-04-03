import { useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { convertToCurrency } from "../../utils/convertCurrency";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import yourPhoto from "../../assets/img/photo.png";
import * as S from "./styles";
import Footer from "../../components/Footer";

export const MyProfile = () => {
  const navigate = useNavigate();
  const { handleProfileData, profileData } = useGlobalContext();

  const [profileName, setProfileName] = useState(profileData?.name || "");
  const [photo, setPhoto] = useState(profileData?.photo || "");
  const [valueMonth, setValueMonth] = useState(profileData?.valueMonth || "");
  const [hoursPerDay, setHoursPerDay] = useState(
    profileData?.hoursPerDay || ""
  );
  const [daysAWeek, setDaysAWeek] = useState(profileData?.daysWeek || "");
  const [vacationWeeks, setVacationWeeks] = useState(
    profileData?.vacationWeeks || ""
  );

  const dataFilled = valueMonth && daysAWeek && hoursPerDay;

  const valuePerDay = (
    Number(valueMonth) /
    Number(daysAWeek) /
    Number(hoursPerDay)
  ).toFixed(2);

  const handleClick = () => {
    handleProfileData({
      name: profileName,
      photo: photo,
      valueMonth: valueMonth,
      hoursPerDay: hoursPerDay,
      daysWeek: daysAWeek,
      vacationWeeks: vacationWeeks,
      valuePerDay: valuePerDay,
    });

    navigate("/");
  };

  const disabledButton =
    !profileName || !valueMonth || !hoursPerDay || !daysAWeek || !vacationWeeks;

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
            <h2>{profileName}</h2>

            <p>
              {dataFilled ? (
                <>
                  O valor da sua hora é{" "}
                  <span>{convertToCurrency(valuePerDay)}</span>
                </>
              ) : (
                "Preencha os campos para saber seu valor/hora."
              )}
            </p>

            <Button
              styleType="green"
              fullWidth
              onClick={handleClick}
              disabled={disabledButton}
            >
              Salvar Dados
            </Button>
          </S.LeftContentCard>

          <div>
            <Title>Dados do perfil</Title>

            <S.InputFirstContent>
              <Input
                value={profileName}
                label="Nome"
                name="name"
                type="text"
                onChange={setProfileName}
              />

              <Input
                value={photo}
                label="Link da foto"
                name="photo"
                type="text"
                onChange={setPhoto}
              />
            </S.InputFirstContent>

            <Title>Planejamento</Title>

            <S.InputSecondContent>
              <Input
                value={valueMonth}
                label="Quanto eu<br />quero ganhar por mês?"
                placeholder="R$"
                name="value"
                type="text"
                onChange={setValueMonth}
              />

              <Input
                value={hoursPerDay}
                label="Quantas horas<br />quero trabalhar por dia?"
                name="hours"
                type="number"
                onChange={setHoursPerDay}
              />

              <Input
                value={daysAWeek}
                label="Quantos dias quero<br />trabalhar por semana?"
                name="days"
                type="number"
                onChange={setDaysAWeek}
              />

              <Input
                value={vacationWeeks}
                label="Quantas semanas<br />por ano você quer tirar férias?"
                name="weeks"
                type="number"
                onChange={setVacationWeeks}
              />
            </S.InputSecondContent>
          </div>
        </S.Wrapper>
      </Container>

      <Footer />
    </div>
  );
};
