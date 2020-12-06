import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 50%;
`;

export const Form = styled.div`
  display: flex;
  flex: 1;
  width: 70%;
  margin: 24px;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin-bottom: 32px;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
`;
