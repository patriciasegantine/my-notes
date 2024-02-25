import React from 'react';
import { Header } from "../components/header/header.tsx";
import { Container } from "./details.styles.ts";

export const Details: React.FC = () => {
  return (
    <Container>
      <Header/>
    </Container>
  );
};
