import React from "react";
import SVG from "react-inlinesvg";
import logo from "@axao/assets/icons/logo.svg";
import userIcon from "@axao/assets/image/Usericon.svg";
import searchIcon from "@axao/assets/image/Search.svg";
import cartIcon from "@axao/assets/image/Carticon.svg";

import {
  Container,
  IconItem,
  IconItemGroup,
  ListItem,
  ListItemGroup,
  Logo,
  Nav,
} from "./NavigationStyle";

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
              <SVG src={userIcon} />
            </a>
          </IconItem>
          <IconItem>
            <a href="/">
              <SVG src={searchIcon} />
            </a>
          </IconItem>
          <IconItem>
            <a href="/">
              <SVG src={cartIcon} />
            </a>
          </IconItem>
        </IconItemGroup>
      </Container>
    </Nav>
  );
}

export default NavigationBar;
