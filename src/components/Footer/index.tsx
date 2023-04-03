import { Link } from "react-router-dom";
import { Container } from "../Container";
import * as S from "./styles";

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.ContentText>
            Desenvolvido com 💜 por
            <span>
              <Link to={"https://pricarrenho.com.br"} target="_blank">
                <b> Priscilla Carrenho</b>
              </Link>
            </span>
          </S.ContentText>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Footer;
