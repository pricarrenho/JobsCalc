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
  const { profileName, profilePhoto } = useGlobalContext();

  const navigate = useNavigate();

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
              <Alert /> {title}
            </h2>
          </S.Alert>
          <S.ContentRight>
            <div>
              <h2>{profileName}</h2>
              <Link to="/">Ver Perfil</Link>
            </div>
            <div>
              <S.Img
                src={profilePhoto || yourPhoto}
                alt="Imagem da foto selecionada pelo usuário"
              />
            </div>
          </S.ContentRight>
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};
