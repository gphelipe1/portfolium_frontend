import styled from "styled-components";

export const Container = styled.div`
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
