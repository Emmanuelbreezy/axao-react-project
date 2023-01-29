import React from "react";
import { Button } from "@axao/components";
import image1 from "@axao/assets/image/third-section1.png";
import image2 from "@axao/assets/image/third-section2.png";
import image3 from "@axao/assets/image/third-section3.png";
import {
  Card,
  Col,
  Container,
  Header,
  ListGroup,
  ListItem,
  Row,
  Image,
} from "./ThirdSectionStyle";

function ThirdSection() {
  return (
    <Container>
      <Header>
        <h1>How it Works</h1>
      </Header>
      <ListGroup>
        <ListItem padding={false} active={false}>
          <span>Get a Card</span>
        </ListItem>
        <ListItem padding active>
          <span>Build Profile</span>
        </ListItem>
        <ListItem padding active={false}>
          <span>Share</span>
        </ListItem>
      </ListGroup>
      <Row>
        {/* { first card} */}

        <Card>
          <Col width="30%">
            <Header>
              <h1>
                <span>Grab a AXAO Smart </span>
                <span>Product</span>
              </h1>
              <p>
                Choose from our variety of products designed to fit the
                on-the-go, ready-whenever lifestyle.
              </p>
            </Header>
            <Button fontSize="24px" outline={false} text="Shop All Products" />
          </Col>
          <Col width="30%">
            <Image className="image1" src={image1} alt="" />
          </Col>
        </Card>

        {/* { second card} */}

        <Card className="CardDiv3">
          <Col width="auto">
            <Image className="image2" src={image2} alt="" />
          </Col>
          <Col width="30%">
            <Header>
              <h1>Build your Profile</h1>
              <p>
                Start customizing your profile. When your product arrives,
                simply activate it to your profile.
              </p>
              <Button
                fontSize="24px"
                outline={false}
                text="Shop All Products"
              />
            </Header>
          </Col>
        </Card>

        {/* { third card} */}
        <Card>
          <Col width="30%">
            <Header>
              <h1>
                <span>Share your profile with</span>
                <span>anyone</span>
              </h1>
              <p>
                Download the AXAO app to share your profile with a simple scan
                to someone’s phone. They don’t need the app!
              </p>
            </Header>
            <Button fontSize="24px" outline={false} text="Shop All Products" />
          </Col>
          <Col width="35%" className="Col3_ImageDiv">
            <Image className="image3" src={image3} alt="" />
          </Col>
        </Card>
      </Row>
    </Container>
  );
}

export default ThirdSection;
