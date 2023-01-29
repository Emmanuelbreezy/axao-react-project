import device from "@axao/utils/devices";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 28px;
  height: auto;
  margin-top: 55px;
  z-index: 99;

  @media ${device.laptop} {
    width: ${(p) => p.theme.containerWidth};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media ${device.laptop} {
    width: auto;
  }
`;
