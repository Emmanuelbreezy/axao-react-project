import device from "@axao/utils/devices";
import styled from "styled-components";

interface ContainerPropType {
  imgSrc: string;
}

export const Container = styled.div<ContainerPropType>`
  position: relative;
  width: 100%;
  display: block;
  background-image: ${(p) => `url(${p.imgSrc})`};
  background-repeat: no-repeat;
  background-size: contain;

  background-position: left bottom;
  background-position-x: 100px;
  background-position-y: none;
  margin-top: 80px;
  height: auto;

  @media ${device.laptop} {
    background-position-x: -70px;
    background-position-y: 104px;
    height: 500px;
  }
`;

export const Header = styled.h1`
  font-family: ${(p) => p.theme.fontFamily};
  color: ${(p) => p.theme.textColor} !important;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 2.5rem;
  line-height: 107.3%;
  text-transform: uppercase;
`;

export const Col = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  .ListDiv {
    width: auto;
    display: flex;
    padding-left: 0rem;
    align-items: flex-start;
    flex-direction: column;

    @media ${device.mobileL} {
      width: 80%;
    }
  }

  @media ${device.laptop} {
    .ListDiv {
      width: auto;
      gap: 10rem;
      flex-direction: row;
      padding-left: 5rem;
    }
  }
`;

export const ListGroup = styled.ul`
  width: auto;
  margin: 0px;
  margin-top: 25px;
  text-align: left !important;
  list-style-type: none;
  padding: 0 !important;
  font-family: ${(p) => p.theme.fontFamily};
  padding-top: 0px !important;

  @media ${device.laptop} {
    margin: 0px;
  }
`;

export const ListItem = styled.li`
  text-align: left !important;
  font-family: ${(p) => p.theme.fontFamily};
  color: ${(p) => p.theme.textColor} !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 190%;
  text-transform: capitalize;
`;
