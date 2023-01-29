import device from "@axao/utils/devices";
import styled from "styled-components";

interface ListItemPropsType {
  padding: boolean;
  active: boolean;
}

interface ColPropsType {
  width: string;
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  height: auto;
  z-index: 99;

  @media ${device.laptop} {
    width: ${(p) => p.theme.containerWidth};
  }
`;

export const Header = styled.div`
  text-align: center;
  font-family: ${(p) => p.theme.fontFamily};
  padding-bottom: 0px;

  h1 {
    color: ${(p) => p.theme.textColor};
    font-size: 30px;
    font-weight: 300;

    @media ${device.laptop} {
      font-size: 41px;
    }
  }

  span {
    display: block;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    text-align: left !important;
    text-transform: capitalize;
    color: ${(p) => p.theme.lightTextColor} !important;
  }
`;

export const ListGroup = styled.ul`
  list-style-type: none;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li<ListItemPropsType>`
  padding-left: ${(p) => (p.padding ? "39px" : "0px")}; // margin-left: -40px;
  span {
    border-bottom: ${(p) =>
      p.active ? `3px solid ${p.theme.lightTextColor}` : "none"};
    display: inline-block;
    font-weight: 300;
    font-family: ${(p) => p.theme.fontFamily};
    font-style: normal;
    font-size: 24px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 18px;
    text-transform: capitalize;
    color: ${(p) => p.theme.lightTextColor};
  }
`;

export const Row = styled.div`
  width: 100%;
  margin-top: 5px;

  .CardDiv3 {
    flex-direction: column-reverse;
    @media ${device.laptop} {
      flex-direction: row;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .Col3_ImageDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    flex-direction: row;

    .Col3_ImageDiv {
      justify-content: flex-end;
    }
  }
`;

export const Col = styled.div<ColPropsType>`
  width: 100%;

  @media ${device.laptop} {
    width: ${(p) => (p.width ? p.width : "30%")};
  }

  h1 {
    text-align: center !important;

    @media ${device.laptop} {
      text-align: left !important;
    }
  }

  p {
    text-align: center !important;

    @media ${device.laptop} {
      text-align: left !important;
    }
  }

  button {
    width: 100%;
    padding: 0;
    text-align: center !important;

    @media ${device.laptop} {
      text-align: left !important;
    }
  }

  .image1 {
    width: 400px;
    height: auto;

    @media ${device.laptop} {
      width: 600px;
    }
  }

  .image2 {
    width: 400px;
    margin-top: 55px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
      margin-top: 0px;
      width: auto;
    }
  }
  .image3 {
    width: 300px;
    margin-top: 15px;

    @media ${device.laptop} {
      width: auto;
      margin-top: 0px;
    }
  }
`;

export const Image = styled.img`
  width: auto;
`;
