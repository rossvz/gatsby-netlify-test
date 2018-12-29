import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 5%;
  text-align: center;
`;

const Title = styled.div`
  flex: 1;
  font-size: 2em;
`;

export default () => (
  <Container>
    <Title>Hello World!</Title>
    <Link to={"/about"}>About</Link>
  </Container>
);
