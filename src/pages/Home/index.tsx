import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const Home = () => {
  const navigate = useNavigate();
  const { component } = useGlobalContext();

  const handleClick = () => {
    navigate("/add-new-job");
  };

  return (
    <div>
      <Modal />
      <Header title="Esse é um teste" />
      <S.Wrapper>
        <Container>
          <S.Container>
            <S.Content>
              <div>
                <span>12</span>
                <p>Projetos ao total</p>
              </div>
              <div>
                <span>7</span>
                <p>Em andamento</p>
              </div>
              <div>
                <span>4</span>
                <p>Encerrados</p>
              </div>
            </S.Content>

            <Button styleType="orange" icon="plusSign" onClick={handleClick}>
              Acionar Novo Job
            </Button>
          </S.Container>
        </Container>
      </S.Wrapper>
      <S.WrapperContent>{component.map((item) => item)}</S.WrapperContent>
    </div>
  );
};
