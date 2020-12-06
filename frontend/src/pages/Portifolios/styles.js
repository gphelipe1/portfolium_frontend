import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1%;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2%;
  cursor: pointer;
`;

export const Name = styled.span`
  display: flex;
  font-size: 18px;
`;

export const Description = styled.span`
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  text-align: justify;
  color: #949191;
`;
