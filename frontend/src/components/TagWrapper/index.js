import React from "react";

import Tag from "../Tag";

import { Container } from "./styles";

const Wrapper = ({ values = [] }) => (
  <Container>
    {values.map((el, idx) => (
      <Tag key={idx}>{el}</Tag>
    ))}
  </Container>
);

export default Wrapper;
