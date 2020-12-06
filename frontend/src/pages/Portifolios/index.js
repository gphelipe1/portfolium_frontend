import React, { useState, useEffect } from "react";

import { findStudents } from "../../services/students";

import Tag from "../../components/Tag";
import Card from "../../components/Card";
import Divider from "../../components/Divider";

import { Container, CardWrapper, Description, Name } from "./styles";

const Portifolio = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await findStudents();
      setStudents(result);
    };

    fetch();
  }, []);

  const renderCard = (student) => {
    const { descricao, nome, tecnologias } = student;
    return (
      <>
        <Card>
          <Name>{nome}</Name>
          <Divider />
          <Description>{descricao}</Description>
          <Divider />
          {tecnologias.map((el, idx) => (
            <Tag key={idx}>{el}</Tag>
          ))}
        </Card>
      </>
    );
  };

  const renderStudents = () => {
    return (
      <>
        {students.map((student) => (
          <CardWrapper>{renderCard(student)}</CardWrapper>
        ))}
      </>
    );
  };

  return <Container>{renderStudents()}</Container>;
};

export default Portifolio;
