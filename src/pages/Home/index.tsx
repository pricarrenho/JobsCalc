import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardJob } from "../../components/CardJob";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";
import Footer from "../../components/Footer";

export const Home = () => {
  const navigate = useNavigate();
  const { jobList, profileData, handleJobList } = useGlobalContext();
  const [showModal, setShowModal] = useState<string | undefined>();

  const statusStarted = jobList?.filter(
    (item) => item.jobsStatus === "started"
  );

  const statusDone = jobList?.filter((item) => item.jobsStatus === "done");

  const handleMakePerfil = () => {
    navigate("/my-perfil");
  };

  const handleAddJob = () => {
    navigate("/add-new-job");
  };

  const handleOpenModal = (value: string) => {
    setShowModal(value);
  };

  const handleDelete = () => {
    handleJobList(jobList.filter((value) => value.id !== showModal));
    setShowModal(undefined);
  };

  const handleClose = () => {
    setShowModal(undefined);
  };

  return (
    <div>
      <Modal
        handleDelete={handleDelete}
        show={!!showModal}
        handleClose={handleClose}
      />
      <Header />

      <S.Wrapper>
        <S.WrapperFirstContent>
          <Container>
            <S.Container>
              <S.Content>
                <div>
                  <span>{jobList?.length | 0}</span>
                  <p>Projeto{jobList?.length > 1 && "s"} ao total</p>
                </div>
                <div>
                  <span>{statusStarted?.length | 0}</span>
                  <p>Em andamento</p>
                </div>
                <div>
                  <span>{statusDone?.length | 0}</span>
                  <p>Encerrado{statusDone?.length > 1 && "s"} </p>
                </div>
              </S.Content>

              {profileData ? (
                <Button
                  styleType="orange"
                  icon="plusSign"
                  onClick={handleAddJob}
                >
                  Acionar Novo Job
                </Button>
              ) : (
                <Button styleType="orange" onClick={handleMakePerfil}>
                  Faça seu perfil para começar
                </Button>
              )}
            </S.Container>
          </Container>
        </S.WrapperFirstContent>

        {jobList?.map((value, index) => (
          <S.WrapperContent key={value.id}>
            <CardJob
              deleteButton={() => handleOpenModal(value.id)}
              id={value.id}
              position={index + 1}
              name={value.name}
              daysLeft={value.daysLeft}
              value={value.value}
              jobsStatus={value.jobsStatus}
            />
          </S.WrapperContent>
        ))}
      </S.Wrapper>

      <Footer />
    </div>
  );
};
