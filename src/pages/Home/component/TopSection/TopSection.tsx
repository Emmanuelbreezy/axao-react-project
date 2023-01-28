import React from "react";
import { Button } from "@axao/components";
import iphone1 from "@axao/assets/image/iphone-12-pro-max--graphite.svg";
import digitalCard from "@axao/assets/image/digital-card.svg";
import userCard from "@axao/assets/image/usercard.png";
import bgLogo from "@axao/assets/image/bg-logo.png";

import { Container, Header, ImageGroup, Image } from "./TopSectionStyle";

function TopSection() {
  return (
    <Container>
      <Header>
        <h1>
          <span>Digital business cards</span>
          <span>for modern networking.</span>
        </h1>
      </Header>
      <ImageGroup>
        <div className="ImageDiv">
          <Image className="image1" src={digitalCard} />
          <Image className="image2" src={iphone1} />
          <Image className="image3" src={userCard} />
          <Image className="image4" src={userCard} />
          <Image className="image5" src={userCard} />
          <Image className="image6" src={userCard} />
          <Image className="imageBg" src={bgLogo} />
        </div>
      </ImageGroup>
      <Button text="Shop Product" />
    </Container>
  );
}

export default TopSection;
