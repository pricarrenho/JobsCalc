import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-items: center;
  gap: 16px;
  min-height: calc(100vh - 88px - 100px);

  @media (min-width: 800px) {
    justify-content: space-between;
    flex-direction: initial;
    gap: 48px;
    margin-top: 64px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  gap: 16px;

  @media (min-width: 800px) {
    flex-direction: initial;
    margin: 0px;
  }
`;

export const FirstInput = styled.div`
  flex-direction: column;
  margin: 24px 16px 16px;

  @media (min-width: 800px) {
    flex-direction: initial;
    margin: 0px;
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 800px) {
    flex-direction: initial;
    gap: 80px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;

  @media (min-width: 800px) {
    padding: 16px;
  }
`;
