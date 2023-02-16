import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  justify-items: center;
  gap: 1rem;

  @media (min-width: 800px) {
    justify-content: space-between;
    flex-direction: initial;
    gap: 3rem;
    margin-top: 4rem;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: initial;
    margin: 0rem;
  }
`;

export const FirstInput = styled.div`
  flex-direction: column;
  margin: 2rem 1rem 1rem;

  @media (min-width: 800px) {
    flex-direction: initial;
    margin: 0rem;
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 800px) {
    flex-direction: initial;
    gap: 5rem;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;

  @media (min-width: 800px) {
    padding: 1rem;
  }
`;
