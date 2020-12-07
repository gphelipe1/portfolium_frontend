import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: -webkit-fill-available;
  margin-left: 5%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 30%;
  margin: 1%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-right: 1%;
`;

export const NewProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2%;
`;

export const Span = styled.span`
  font-size: 24px;
  padding: 12px;
`;
