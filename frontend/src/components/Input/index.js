import React from "react";

import { Container } from "./styles";

const Input = ({ placeholder = "", secret, ...props }) => (
  <Container
    placeholder={placeholder}
    type={secret && "password"}
    {...props}
  ></Container>
);

export default Input;
