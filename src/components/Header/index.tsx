import { HeaderProps } from "./types";
import { Link } from "../Link";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Alert } from "../../assets/svg/Alert";
import { Link as LinkRoutes } from "react-router-dom";
import yourPhoto from "../../assets/img/photo.png";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const Header = ({ title, goBackHeader, icon }: HeaderProps) => {
  const { profileName, profilePhoto } = useGlobalContext();

  if (goBackHeader) {
    return (
      <S.Container>
        <Container>
          <S.WrapperGoBackHeader>
            <Link to="/home" icon="ArrowLeft"></Link>
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
              <LinkRoutes to="/">Ver Perfil</LinkRoutes>
            </div>
            <div>
              {profilePhoto ? (
                <S.Img
                  src={profilePhoto}
                  alt="Imagem da foto selecionada pelo usuário"
                />
              ) : (
                <S.Img
                  src={yourPhoto}
                  alt="Imagem com uma camera e o texto 'Sua foto aqui' embaixo"
                />
              )}
            </div>
          </S.ContentRight>
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};
