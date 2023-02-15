import * as S from "./styles";
import { JobStatusProps } from "./types";

export const JobStatus = ({ type }: JobStatusProps) => {
  const biblioteca = {
    pendent: "Não iniciado",
    started: "Em andamento",
    done: "Encerrado",
  };

  return <S.ContentStatus type={type}>{biblioteca[type]}</S.ContentStatus>;
};
