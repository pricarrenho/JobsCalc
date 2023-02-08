import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
`;

export const LeftContentCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;

    h2 {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.lg};
      font-weight: 600;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.md};
      text-align: center;
      margin-bottom: 1rem;
    }

    span {
      font-weight: 600;
    }
  `}
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 11rem;
  height: 11rem;
  border: 4px solid #f1972c;
`;

export const InputFirstContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const InputSecondContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
