import device from "@axao/utils/devices";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  padding: 18px;
  padding-top: 35px;
  height: auto;

  .ButtonDiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -75px;

    @media ${device.laptop} {
      margin-top: 100px;
    }

    button {
      z-index: 99;
      margin-left: -5px;

      @media ${device.laptop} {
        margin-left: -29px;
      }
    }
  }
`;

export const Header = styled.div`
  font-family: ${(p) => p.theme.fontFamily};
  text-align: center;
  padding-bottom: 20px;
  h1 {
    text-transform: capitalize;
    font-weight: 300 !important;
    font-size: 22px;
    line-height: 122.8%;

    @media ${device.tablet} {
      font-size: 32px;
      line-height: 102.8%;
    }

    @media ${device.laptop} {
      font-size: 52px;
      line-height: 102.8%;
    }
  }

  span {
    display: block;
  }

  color: #ffffff;
`;

export const ImageGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;

  .ImageDiv {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image1 {
    left: 25%;
    width: 150px;
    height: auto;

    @media ${device.laptop} {
      width: auto;
      left: 38%;
    }
  }

  .image2 {
    top: 20px;
    left: 25%;
    width: 150px;
    height: auto;
    z-index: 1;

    @media ${device.laptop} {
      width: auto;
      left: 40%;
    }
  }
  .image3 {
    left: 80%;
    top: 100px;
    width: 100px;
    height: auto;

    @media ${device.laptop} {
      width: auto;
      top: 100px;
      left: 15%;
    }
  }

  .image4 {
    left: -5%;
    top: 70%;
    width: 100px;
    height: auto;

    @media ${device.laptop} {
      width: auto;
      top: 100%;
      left: 310px;
    }
  }

  .image5 {
    left: -8%;
    top: 60px;
    width: 100px;
    height: auto;

    @media ${device.laptop} {
      width: auto;
      top: 100px;
      left: 80%;
    }
  }

  .image6 {
    left: 75%;
    top: 70%;
    width: 100px;
    height: auto;

    @media ${device.laptop} {
      width: auto;
      top: 100%;
      left: 65%;
    }
  }

  .imageBg {
    top: 45%;
    left: 30%;
    z-index: 0;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
