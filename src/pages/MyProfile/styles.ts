import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 64px;
`;

export const LeftContentCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 252px;

    h2 {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.lg};
      font-weight: 600;
      margin-top: 16px;
      margin-bottom: 24px;
    }

    p {
      color: ${theme.colors.gray800};
      font-size: ${theme.font.sizes.md};
      text-align: center;
    }

    span {
      font-weight: 600;
    }
  `}
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 4px solid #f1972c;
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
