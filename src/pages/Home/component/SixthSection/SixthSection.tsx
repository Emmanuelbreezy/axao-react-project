import React from "react";
import BorderCard from "./component/BorderCard";
import { Container, Header, Group } from "./SixSectionStyle";

function SixthSection() {
  return (
    <Container>
      <Header>
        <h1>
          <span>We have solutions for every </span>
          <span>professional and every team</span>
        </h1>
        <p>
          From individuals to 10,000+ person teams, we provide mobile and
          desktop ready solutions that allow for easy management of digital
          business cards.
        </p>
      </Header>
      <Group>
        <BorderCard />
        <BorderCard />
      </Group>
    </Container>
  );
}

export default SixthSection;
