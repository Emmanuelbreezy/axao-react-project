import React from "react";
import SVG from "react-inlinesvg";
import card from "@axao/assets/image/business-card5.png";
import thumbnail1 from "@axao/assets/image/thumbnail1.png";
import thumbnail2 from "@axao/assets/image/thumbnail2.png";
import thumbnail3 from "@axao/assets/image/thumbnail3.png";
import thumbnail4 from "@axao/assets/image/thumbnail4.png";
import thumbnail5 from "@axao/assets/image/thumbnail5.png";
import penIcon from "@axao/assets/image/penIcon.svg";
import phoneMax from "@axao/assets/image/iphone-max.svg";

import Calendar from "@axao/assets/image/Calendar.svg";
import Star from "@axao/assets/image/Star.svg";
import Pin from "@axao/assets/image/Pin.svg";
import Chart from "@axao/assets/image/Chart.svg";
import Gear from "@axao/assets/image/Gear.svg";
import Zap from "@axao/assets/image/Zap.svg";
import ArrowCircle from "@axao/assets/image/arrow-circle.svg";

import {
  CardBox,
  Col,
  Container,
  Header,
  ListGroups,
  ListGroupsItem,
  Row,
  Image,
  Slider,
  Slide,
  Thumbnail,
  IconImage,
  Group,
  GroupCard,
} from "./FourthSectionStyle";
import SmallCard from "./component/SmallCard";

function FourthSection() {
  return (
    <Container>
      <Header>
        <h1>A Better Way to Connect</h1>
        <p>
          Download the AXAO app to share your profile with a simple scan to
          someone’s phone. They don’t need the app!
        </p>
      </Header>
      <Row>
        <CardBox>
          <Col>
            <ListGroups>
              <ListGroupsItem active>
                <span>Businesses</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Freelancers</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Events</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Universities</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Start Ups</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Personal</span>
              </ListGroupsItem>
              <ListGroupsItem active={false}>
                <span>Retail</span>
              </ListGroupsItem>
            </ListGroups>
          </Col>
          <Image className="imageCard" src={card} alt="" />
        </CardBox>
      </Row>
      <Slider>
        <Slide>
          <Thumbnail src={thumbnail1} alt="" />
          <Thumbnail src={thumbnail2} alt="" />
          <Thumbnail src={thumbnail3} alt="" />
          <Thumbnail src={thumbnail4} alt="" />
          <Thumbnail src={thumbnail5} alt="" />
        </Slide>
        <IconImage src={penIcon} alt="" />
      </Slider>
      <Row>
        <Group>
          <div>
            <Image className="imageMax" src={phoneMax} alt="" />
          </div>

          <GroupCard>
            <SmallCard
              opacity
              icon={Calendar}
              title="Save Time"
              subtitle="Exchange and save each others contact info in Secs"
            />
            <SmallCard
              opacity
              icon={Star}
              title="Stand out from the Crowd"
              subtitle="Exchange and save each others contact info in Secs"
            />
            <SmallCard
              opacity={false}
              icon={Pin}
              title="Always with You"
              subtitle="No more forgetting Business Cards. Axao got you covered"
            />
            <SmallCard
              opacity={false}
              icon={Chart}
              title="Save Money"
              subtitle="Stop buying stack of business cards(that end up in thrash"
            />
            <SmallCard
              opacity={false}
              icon={Gear}
              title="CRM Integrations"
              subtitle="No more data entry"
            />
            <SmallCard
              opacity
              icon={Zap}
              title="Contactless"
              subtitle="no physical touch"
            />
          </GroupCard>
          <div className="TransparentBox" />
          <div className="ArrowCircle">
            <SVG src={ArrowCircle} />
          </div>
        </Group>
      </Row>
    </Container>
  );
}

export default FourthSection;
