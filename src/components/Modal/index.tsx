import { Trash } from "../../assets/svg/Trash";
import { Button } from "../Button";
import * as S from "./styles";

export const Modal = () => {
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
          <Button styleType="gray">Cancelar</Button>
          <Button styleType="red">Excluir Job</Button>
        </S.ContentButton>
      </S.Container>
    </S.Wrapper>
  );
};
