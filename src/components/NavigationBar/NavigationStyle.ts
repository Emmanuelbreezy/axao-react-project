import styled from "styled-components";
import device from "@axao/utils/devices";

interface ListItemtType {
  active?: boolean;
}

export const Nav = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  border-bottom-width: 1px;
  background-color: ${(p) => p.theme.primaryColor};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  //max-width: "1500px";

  .FlexGroup {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 65.21px;
  height: 17px;
`;

export const ListItemGroup = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  width: 100px;

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
`;
export const ListItem = styled.li<ListItemtType>`
  a {
    font-family: ${(p) => p.theme.fontFamily};
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    color: ${(p) => (p.active ? p.theme.textColor : p.theme.lightTextColor)};
    font-size: 14px;
    padding-left: 18px;
    text-decoration: none;
  }
`;

export const IconItemGroup = styled.ul`
  width: 100px;
  display: flex;
  align-items: center;
`;
export const IconItem = styled.li`
  padding-left: 18px;

  svg {
    width: 20px !important;
    height: 20px !important;
  }
`;
