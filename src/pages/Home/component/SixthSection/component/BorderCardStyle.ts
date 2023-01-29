import device from "@axao/utils/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
  padding: 1px;
  width: 410px;
  height: auto;
  margin-bottom: 8rem;
  z-index: 99;
  border: 1px solid #fff;
  border-radius: 20px;
  border: double 1px transparent;
  background-image: linear-gradient(#000, #000),
    linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
  background-origin: border-box;
  background-clip: content-box, border-box;

  @media ${device.laptop} {
    height: 292px;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 246px;
  height: 245px;
  margin-top: -155px;
`;

export const Col = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0px;

  button {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-family: ${(p) => p.theme.fontFamily};
  padding-bottom: 0px;
  text-align: center;

  h1,
  h2 {
    color: ${(p) => p.theme.textColor};
    font-weight: 300;
    font-size: 25px;
    line-height: 102.8%;
    margin-bottom: 30px;
    text-transform: capitalize;

    @media ${device.laptop} {
      font-size: 28px;
    }
  }

  h2 {
    width: 70%;
    margin: 0 auto;
    font-size: 20px !important;
  }
`;
