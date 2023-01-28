import React from "react";
import { Col, Container } from "./AppContentStyle";

function AppContent(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Col>
      <Container>{children}</Container>
    </Col>
  );
}

export default AppContent;
