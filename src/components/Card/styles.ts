import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    @media (min-width: 800px) {
      padding: 32px;
      height: 100%;
      gap: 48px;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-size: ${theme.font.sizes.sm};
    text-align: center;

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
    }
  `}
`;

type ImgProps = {
  active?: boolean;
};

const ImgModifier = {
  active: () => css`
    filter: unset;
  `,
};

export const Img = styled.img<ImgProps>`
  ${({ active }) => css`
    filter: grayscale(100%);

    ${active && ImgModifier.active()};
  `}
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  button {
    width: 60%;

    &:last-of-type {
      width: 40%;
    }
  }
`;
