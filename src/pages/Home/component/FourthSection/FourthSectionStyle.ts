import device from "@axao/utils/devices";
import styled from "styled-components";

interface ListGroupsItemPropsType {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  padding-top: 110px;
  height: auto;
  z-index: 99;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

  p {
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    line-height: 30px;
    text-align: center !important;
    text-transform: capitalize;
    color: ${(p) => p.theme.lightTextColor} !important;

    @media ${device.laptop} {
      width: 30%;
      font-size: 24px;
    }
  }
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  margin-top: 15px;
`;

export const CardBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  .imageCard {
    width: 100%;
    margin-top: 10px;
    height: auto;

    @media ${device.laptop} {
      position: absolute;
      top: 10%;
      right: 0%;
      width: auto;
    }
  }

  @media ${device.laptop} {
    justify-content: flex-start;
    flex-direction: row !important;
  }
`;

export const Col = styled.div`
  padding-top: 80px !important;
`;

export const ListGroups = styled.ul`
  width: 100%;
  margin: 0px;
  text-align: left !important;
  list-style-type: none;
  padding: 0 !important;
  padding-top: 0px !important;

  @media ${device.laptop} {
    width: 30%;
    margin: 0 250px;
  }
`;

export const ListGroupsItem = styled.li<ListGroupsItemPropsType>`
  span {
    text-align: left !important;
    color: ${(p) =>
      p.active === true ? p.theme.textColor : p.theme.lightTextColor};
    display: block;
    font-weight: 300;
    font-family: ${(p) => p.theme.fontFamily};
    font-style: normal;
    font-weight: 300;
    font-size: 52px;
    line-height: 120%;
    text-transform: capitalize;
  }
`;

export const Image = styled.img`
  width: auto;
`;

export const Slider = styled.div`
  position: relative;

  padding-top: 85px;
  width: 100%;
  height: 300px;
`;

export const Slide = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: hidden;
  gap: 15px;
`;

export const Thumbnail = styled.img`
  width: 307px;
  height: 235px;
`;

export const IconImage = styled.img`
  width: 200px;
  position: absolute;
  left: 30%;
  bottom: 15px;

  @media ${device.laptop} {
    width: auto;
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  height: auto;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  .imageMax {
    width: 300px;
  }

  .ArrowCircle {
    position: absolute;
    right: 20%;
    top: 50%;
    cursor: pointer;
    z-index: 995;

    svg {
      cursor: pointer;
    }
  }

  .TransparentBox {
    display: none;
    position: absolute;
    top: 114px;
    right: 0;
    width: 566px;
    height: 614px;
    background: linear-gradient(
      270deg,
      #000000 -22.66%,
      rgba(0, 0, 0, 0) 90.36%
    );
    opacity: 0.9;
    z-index: 99;

    @media ${device.laptop} {
      display: block;
    }
  }
`;
export const GroupCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin-top: 15px;
  grid-gap: 0px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media ${device.laptop} {
    grid-template-columns: auto auto auto;
    grid-gap: 25px;
    margin-top: 0px;
  }
`;
