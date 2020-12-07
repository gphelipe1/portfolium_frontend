import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  width: 100%;
  padding: 5px;
  border: 1px solid #b5b5b5;
  border-radius: 8px;
  height: ${(props) => props.height};
`;
