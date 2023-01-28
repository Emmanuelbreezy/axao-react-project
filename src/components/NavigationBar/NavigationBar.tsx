import React from "react";
import logo from "@axao/assets/icons/logo.svg";
import {
  Container,
  IconItem,
  IconItemGroup,
  ListItem,
  ListItemGroup,
  Logo,
  Nav,
} from "./NavigationStyle";
import { Cart, Search, User } from "../Icons";

function NavigationBar() {
  return (
    <Nav>
      <Container>
        <div className="FlexGroup">
          <a href="/">
            <Logo src={logo} />
          </a>
          <ListItemGroup>
            <ListItem active>
              <a href="/">Products</a>
            </ListItem>
            <ListItem>
              <a href="/">Technology</a>
            </ListItem>
            <ListItem>
              <a href="/">Motivation </a>
            </ListItem>
          </ListItemGroup>
        </div>
        <IconItemGroup>
          <IconItem>
            <a href="/">
              <User width="1rem" height="1rem" />
            </a>
          </IconItem>
          <IconItem>
            <a href="/">
              <Search width="1rem" height="1rem" />
            </a>
          </IconItem>
          <IconItem>
            <a href="/">
              <Cart width="1rem" height="1rem" />
            </a>
          </IconItem>
        </IconItemGroup>
      </Container>
    </Nav>
  );
}

export default NavigationBar;
