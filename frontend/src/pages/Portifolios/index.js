import React, { useState, useEffect } from "react";

import { reduceText } from "../../utils";
import { findStudents } from "../../services/students";

import Tag from "../../components/Tag";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import Description from "../../components/Description";

import { Container, CardWrapper, Name, TagWrapper } from "./styles";

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
          <Description value={reduceText(descricao)} />
          <Divider />
          <TagWrapper>
            {tecnologias.map((el, idx) => (
              <Tag key={idx}>{el.descricao}</Tag>
            ))}
          </TagWrapper>
        </Card>
      </>
    );
  };

  const renderStudents = () => {
    return (
      <>
        {students.map((student, idx) => (
          <CardWrapper key={idx}>{renderCard(student)}</CardWrapper>
        ))}
      </>
    );
  };

  return <Container>{renderStudents()}</Container>;
};

export default Portifolio;
