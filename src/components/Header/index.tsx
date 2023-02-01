import { HeaderProps } from "./types";
import { Link } from "../Link";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Alert } from "../../assets/svg/Alert";
import * as S from "./styles";

const icons = {
  alert: <Alert />,
};

export const Header = ({ title, goBackHeader, icon }: HeaderProps) => {
  if (goBackHeader) {
    return (
      <S.Container>
        <Container>
          <S.Wrapper>
            <Link to="/home" icon="ArrowLeft"></Link>
            <h2>{title}</h2>
          </S.Wrapper>
        </Container>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Container>
        <S.Wrapper>
          <Logo />
          <h2>
            {icon && icons[icon]} {title}
          </h2>
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};
