import React from "react";
import BusinessCard from "@axao/assets/image/business-card-footer.png";

import { Header, Container, Col, ListGroup, ListItem } from "./FooterStyle";

function Footer() {
  const ListObj = [
    {
      title: "Shop",
      items: [
        {
          id: "watch",
          name: "Watches",
        },
        {
          id: "mobil-acc",
          name: "Mobile Accessories",
        },
        {
          id: "mobil-audio",
          name: "Mobile Audio",
        },
        {
          id: "tv-home",
          name: "TV & Home Theater",
        },
        {
          id: "computing",
          name: "Computing",
        },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        {
          id: "contact-us",
          name: "Contact Us",
        },
        {
          id: "product-support",
          name: "Product Support",
        },
        {
          id: "mobil-audio",
          name: "Mobile Audio",
        },
        {
          id: "order-support",
          name: "Order Support",
        },
        {
          id: "your-account",
          name: "Your Account",
        },
        {
          id: "register-prod",
          name: "Register Your Product",
        },
      ],
    },
    {
      title: "OFFERS",
      items: [
        {
          id: "offers",
          name: "Offers",
        },
        {
          id: "axao",
          name: "AXAO Rewards ",
        },
        {
          id: "student-edu",
          name: "Student & Educator Discounts",
        },
        {
          id: "gov-discount",
          name: "Government Discounts",
        },
        {
          id: "employee-discount",
          name: "Employee Discounts",
        },
        {
          id: "first-responder",
          name: "First Responder Discounts",
        },
        {
          id: "business-discount",
          name: "Business Discounts",
        },
      ],
    },
    {
      title: "ABOUT US",
      items: [
        {
          id: "our-business",
          name: "Our Business",
        },
        {
          id: "brands",
          name: "Brand Identity",
        },
        {
          id: "careers",
          name: "Careers",
        },
        {
          id: "investor-rel",
          name: "Investor Relations",
        },
        {
          id: "newsroom",
          name: "Newsroom",
        },
        {
          id: "corporate",
          name: "Corporate Citizenship",
        },
        {
          id: "digital",
          name: "Digital Responsibility",
        },
      ],
    },
  ];
  return (
    <Container imgSrc={BusinessCard}>
      <Col>
        <div className="ListDiv">
          {ListObj.map((res) => {
            return (
              <ListGroup>
                <Header>{res.title}</Header>
                {res.items.map((item) => {
                  return <ListItem key={item.id}>{item.name}</ListItem>;
                })}
              </ListGroup>
            );
          })}
        </div>
      </Col>
    </Container>
  );
}

export default Footer;
