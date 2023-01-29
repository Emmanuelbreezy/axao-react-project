import React from "react";
import SVG from "react-inlinesvg";

import { Container, Title, Col, IconBox } from "./SmallCardStyles";

function SmallCard(props: {
  icon: string;
  title: string;
  subtitle: string;
  opacity: boolean;
}) {
  const { icon, title, subtitle, opacity } = props;

  return (
    <Container>
      <Col>
        <IconBox opacity={opacity}>
          <SVG src={icon} />
        </IconBox>
        <Title>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Title>
      </Col>
    </Container>
  );
}

export default SmallCard;
