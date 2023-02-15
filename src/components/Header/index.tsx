import { HeaderProps } from "./types";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Alert } from "../../assets/svg/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import yourPhoto from "../../assets/img/photo.png";
import { ArrowLeft } from "../../assets/svg/ArrowLeft";
import * as S from "./styles";

export const Header = ({ title, goBackHeader, icon }: HeaderProps) => {
  const { profileData, jobList } = useGlobalContext();
  const navigate = useNavigate();

  const hoursJobs = jobList?.reduce((prev, current) => {
    if (current.jobsStatus === "started") {
      return prev + Number(current.hoursPerDay);
    }
    return prev;
  }, 0);

  const hoursLeft = Number(profileData?.hoursPerDay) - hoursJobs;

  const handleGoBack = () => {
    navigate(-1);
  };

  if (goBackHeader) {
    return (
      <S.Container>
        <Container>
          <S.WrapperGoBackHeader>
            <S.Button onClick={handleGoBack}>
              <ArrowLeft color="#BFBFCC" />
            </S.Button>

            <h2>{title}</h2>
          </S.WrapperGoBackHeader>
        </Container>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Container>
        <S.Wrapper>
          <div>
            <Logo />
          </div>
          <S.Alert>
            <h2>
              <Alert /> Você tem {hoursLeft | 0} horas livres no seu dia
            </h2>
          </S.Alert>
          <S.ContentRight>
            <div>
              <h2>{profileData?.name}</h2>
              <Link to="/my-perfil">Ver Perfil</Link>
            </div>
            <div>
              <S.Img
                src={profileData?.photo || yourPhoto}
                alt="Imagem da foto selecionada pelo usuário"
              />
            </div>
          </S.ContentRight>
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};
