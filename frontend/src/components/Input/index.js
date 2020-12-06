import React from "react";

import { Container } from "./styles";

const Input = ({ placeholder = "", ...props }) => (
  <Container placeholder={placeholder} {...props}></Container>
);

export default Input;
