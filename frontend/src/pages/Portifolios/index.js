import React, { useState, useEffect } from "react";

import { reduceText } from "../../utils";
import { findStudents } from "../../services/students";

import TagWrapper from "../../components/TagWrapper";
import Name from "../../components/Name";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import Description from "../../components/Description";

import { Container, CardWrapper } from "./styles";

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
    const values = tecnologias.map((el) => el.descricao);

    return (
      <>
        <Card>
          <Name value={nome} />
          <Divider />
          <Description value={reduceText(descricao)} />
          <Divider />
          <TagWrapper values={values} />
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
