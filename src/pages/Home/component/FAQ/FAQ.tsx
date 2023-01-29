import React from "react";
import { Accordion } from "@axao/components";
import { Container, Header, Col } from "./FAQStyle";

function FAQ() {
  return (
    <Container>
      <Col>
        <Header>
          <h1>FAQ</h1>
        </Header>
      </Col>
      <Col>
        <Accordion
          isOpen
          title="And now for our opening act"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Accordion
          title="And now for our opening act"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          isOpen={false}
        />
        <Accordion
          title="And now for our opening act"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          isOpen={false}
        />
        <Accordion
          title="And now for our opening act"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          isOpen={false}
        />
      </Col>
    </Container>
  );
}

export default FAQ;
