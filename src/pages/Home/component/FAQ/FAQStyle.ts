import device from "@axao/utils/devices";
import styled from "styled-components";

export const Container = styled.div`
  width: ${(p) => p.theme.containerWidth};
  margin: 0 auto;
  display: block;
  padding: 11px;
  padding-top: 30px;
  height: auto;
  z-index: 99;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(p) => p.theme.fontFamily};
  padding-bottom: 0px;

  h1 {
    color: ${(p) => p.theme.textColor};
    font-size: 42px;
    font-weight: 300;
    font-weight: 300;
    line-height: 107.3%;
    text-align: left;

    @media ${device.laptop} {
      font-size: 52px;
    }
  }
`;
export const Col = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 60%;
  }
`;
export const Horizontal = styled.div`
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  width: 100%;
`;
