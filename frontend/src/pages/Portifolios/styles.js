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
  margin: 1% 2%;
  width: 20%;

  cursor: pointer;
`;

export const Name = styled.span`
  display: flex;
  height: 20%;
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

export const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  overflow-x: auto;
  padding: 4px;

  div {
    margin-right: 2px;
  }

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;