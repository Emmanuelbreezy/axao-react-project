import device from "@axao/utils/devices";
import styled from "styled-components";

interface IconBoxPropsType {
  opacity: boolean;
}

export const Container = styled.div`
  display: block;
  padding: 15px;
  width: 300px;
  height: 250px;
  background: ${(p) => p.theme.gradientColor};
  z-index: 99;
`;

export const Col = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 100%;
  font-family: ${(p) => p.theme.fontFamily};
  padding-bottom: 0px;

  h1 {
    color: ${(p) => p.theme.textColor};
    font-weight: 300;
    font-size: 25px;
    height: 55px;
    line-height: 107.3%;
    letter-spacing: -0.065em;
    text-transform: capitalize;

    @media ${device.laptop} {
      font-size: 28px;
    }
  }

  p {
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 136.3%;
    letter-spacing: -0.065em;
    text-transform: capitalize;

    color: ${(p) => p.theme.lightTextColor} !important;

    @media ${device.laptop} {
      font-size: 18px;
    }
  }
`;

export const IconBox = styled.span<IconBoxPropsType>`
  display: block;
  padding-top: 15px;
  padding-bottom: 10px;
  opacity: ${(p) => (p.opacity ? "0.2" : "1")};

  svg {
    width: 51px;
    height: 51px;
  }
`;
