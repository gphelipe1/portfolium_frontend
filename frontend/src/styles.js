import styled from "styled-components";
import img from "./assets/background_tam3.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  background: url(${img}) center;

  * {
    font-family: "Roboto";
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 90px;
`;

export const Option = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-right: 30px;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
