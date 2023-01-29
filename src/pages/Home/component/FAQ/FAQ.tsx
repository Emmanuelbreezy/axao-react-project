import React from "react";
import { Accordion } from "@axao/components";
import { Container, Header, Col, Horizontal } from "./FAQStyle";

function FAQ() {
  const listObj = [
    {
      key: "accord1",
      isOpen: true,
      title: "And now for our opening act",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      key: "accord2",
      isOpen: false,
      title: "And now for our opening act",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      key: "accord3",
      isOpen: false,
      title: "And now for our opening act",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      key: "accord4",
      isOpen: false,
      title: "And now for our opening act",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <Container>
      <Col>
        <Header>
          <h1>FAQ</h1>
        </Header>
      </Col>
      <Col>
        {listObj.map((item, index) => {
          return (
            <>
              <Accordion
                key={item.key}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
              />
              {listObj.length - 1 !== index ? <Horizontal /> : null}
            </>
          );
        })}
      </Col>
    </Container>
  );
}

export default FAQ;
