import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardJob } from "../../components/CardJob";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const Home = () => {
  const navigate = useNavigate();
  const { openModal, jobList } = useGlobalContext();

  const handleMakePerfil = () => {
    navigate("/my-perfil");
  };

  const handleAddJob = () => {
    navigate("/add-new-job");
  };

  return (
    <div>
      {openModal && <Modal />}
      <Header />
      <S.Wrapper>
        <Container>
          <S.Container>
            <S.Content>
              <div>
                <span>0</span>
                <p>Projetos ao total</p>
              </div>
              <div>
                <span>0</span>
                <p>Em andamento</p>
              </div>
              <div>
                <span>0</span>
                <p>Encerrados</p>
              </div>
            </S.Content>

            <Button styleType="orange" onClick={handleMakePerfil}>
              Faça seu perfil para começar
            </Button>

            <Button styleType="orange" icon="plusSign" onClick={handleAddJob}>
              Acionar Novo Job
            </Button>
          </S.Container>
        </Container>
      </S.Wrapper>

      {jobList.map((value, index) => (
        <S.WrapperContent key={value.id}>
          <CardJob
            id={index + 1}
            name={value.name}
            daysLeft={value.daysLeft}
            value={value.value}
          />
        </S.WrapperContent>
      ))}
    </div>
  );
};
