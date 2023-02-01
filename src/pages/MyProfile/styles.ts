import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-top: 24px;
`;

export const LeftContentCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `}
`;

export const InputFirstContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
`;

export const InputSecondContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
`;
