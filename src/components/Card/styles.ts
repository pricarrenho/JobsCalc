import styled, { css } from "styled-components";

type ImgProps = {
  active?: string;
};

const ImgModifier = {
  active: () => css`
    filter: grayscale(100%);
  `,
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    font-size: ${theme.font.sizes.md};
    text-align: center;
  `}
`;

export const Img = styled.img<ImgProps>`
  ${({ active }) => css`
    ${active && ImgModifier.active()};
  `}
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  button {
    width: 80%;

    &:last-of-type {
      width: 20%;
    }
  }
`;