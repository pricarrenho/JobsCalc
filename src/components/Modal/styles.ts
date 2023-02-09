import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #41414c;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 28rem;
  height: 22rem;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #787880;
    font-weight: 500;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    width: 12rem;
  }
`;
