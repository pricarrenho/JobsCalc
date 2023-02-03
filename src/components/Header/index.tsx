import { HeaderProps } from "./types";
import { Link } from "../Link";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Alert } from "../../assets/svg/Alert";
import { Link as LinkRoutes } from "react-router-dom";
import yourPhoto from "../../assets/img/photo.png";
import * as S from "./styles";

export const Header = ({ title, goBackHeader, icon }: HeaderProps) => {
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
          <div>
            <h2>
              <Alert /> {title}
            </h2>
          </div>
          <S.ContentRight>
            <div>
              <h2>Priscilla</h2>
              <LinkRoutes to="/">Ver Perfil</LinkRoutes>
            </div>
            <div>
              <S.Img
                src={yourPhoto}
                alt="Imagem com uma camera e o texto 'Sua foto aqui' embaixo"
              />
            </div>
          </S.ContentRight>
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};
