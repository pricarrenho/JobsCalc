import { Trash } from "../../assets/svg/Trash";
import { useGlobalContext } from "../../context/GlobalContext";
import { Button } from "../Button";
import * as S from "./styles";

export const Modal = () => {
  const { setOpenModal } = useGlobalContext();

  const handleClickCancel = () => {
    setOpenModal(false);
  };

  const handleClickDelete = () => {
    console.log("handleClickDelete");
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Trash size={48} />

        <S.Content>
          <h1>Excluir Job</h1>
          <p>
            Quer mesmo excluir esse job?
            <br />
            Ele será apagado pra sempre.
          </p>
        </S.Content>

        <S.ContentButton>
          <Button styleType="gray" onClick={handleClickCancel}>
            Cancelar
          </Button>
          <Button styleType="red" onClick={handleClickDelete}>
            Excluir Job
          </Button>
        </S.ContentButton>
      </S.Container>
    </S.Wrapper>
  );
};
