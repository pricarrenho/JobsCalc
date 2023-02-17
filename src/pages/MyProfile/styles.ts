import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 8px;
  justify-items: center;
  gap: 16px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 64px;
    justify-items: start;
    gap: 0px;
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
    width: 208px;
    padding: 32px;

    h2 {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.lg};
      font-weight: 600;
      margin-top: 16px;
      margin-bottom: 24px;
    }

    p {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.sm};
      text-align: center;
      margin-bottom: 16px;
    }

    span {
      font-weight: 600;
    }

    @media (min-width: 800px) {
      padding: 56px;
      width: 256px;

      p {
        font-size: ${theme.font.sizes.md};
      }
    }
  `}
`;

export const Img = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 96px;
    height: 96px;

    border: 4px solid ${theme.colors.orange900};

    @media (min-width: 800px) {
      width: 116px;
      height: 116px;
    }
  `}
`;

export const InputFirstContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 16px;
  gap: 16px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputSecondContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 16px;
  gap: 16px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
