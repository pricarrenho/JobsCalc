import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral400};
    border: 1px solid ${theme.colors.neutral700};
    border-radius: 8px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-size: ${theme.font.sizes.md};
    text-align: center;
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
  gap: 1rem;

  button {
    width: 60%;

    &:last-of-type {
      width: 40%;
    }
  }
`;
