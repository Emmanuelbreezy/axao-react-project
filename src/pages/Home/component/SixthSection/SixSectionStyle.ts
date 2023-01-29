import device from "@axao/utils/devices";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  padding-top: 110px;
  height: auto;
  z-index: 99;

  @media ${device.laptop} {
    width: ${(p) => p.theme.containerWidth};
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
    line-height: 102.8%;
    font-weight: 300;

    span {
      display: block;
    }

    @media ${device.laptop} {
      font-size: 55px;
    }
  }

  p {
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    line-height: 28px;
    text-align: center !important;
    text-transform: capitalize;
    color: ${(p) => p.theme.lightTextColor} !important;

    @media ${device.laptop} {
      width: 80%;
      font-size: 24px;
    }
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  gap: 30px;
  padding-top: 13rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
