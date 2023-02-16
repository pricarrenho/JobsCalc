import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 0.5rem;
  justify-items: center;
  gap: 1rem;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4rem;
    justify-items: start;
    gap: 0rem;
  }
`;

export const LeftContentCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    width: 13rem;
    padding: 2rem;

    h2 {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.lg};
      font-weight: 600;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.sm};
      text-align: center;
      margin-bottom: 1rem;
    }

    span {
      font-weight: 600;
    }

    @media (min-width: 800px) {
      padding: 3.5rem;
      width: 16rem;

      p {
        font-size: ${theme.font.sizes.md};
      }
    }
  `}
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;

  border: 4px solid #f1972c;

  @media (min-width: 800px) {
    width: 11rem;
    height: 11rem;
  }
`;

export const InputFirstContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1rem;
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputSecondContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1rem;
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
