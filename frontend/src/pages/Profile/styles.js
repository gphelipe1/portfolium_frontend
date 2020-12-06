import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: space-around;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  height: fit-content;
  color: #686565;

  svg {
    width: 140px;
    height: auto;
  }
`;

export const Name = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Description = styled.span`
  display: flex;
  font-size: 14px;
`;
