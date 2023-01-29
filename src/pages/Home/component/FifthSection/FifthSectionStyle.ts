import device from "@axao/utils/devices";
import styled from "styled-components";

interface CardPropsType {
  imgSrc: string;
}

export const Container = styled.div`
  width: 100%;
  display: block;
  padding: 11px;
  padding-top: 110px;
  height: auto;
  z-index: 99;
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
    text-transform: capitalize;
    line-height: 107.3%;
    letter-spacing: -0.065em;

    @media ${device.laptop} {
      font-size: 51px;
    }
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow-y: hidden;
  overflow-x: hidden;
  gap: 30px;

  .TransparentBox {
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
  }

  .ArrowCircle {
    position: absolute;
    top: 41.5%;
    z-index: 995;
    right: 12%;
    cursor: pointer;
  }
`;

export const Card = styled.div<CardPropsType>`
  width: 500px;
  height: 400px;
  background-image: ${(p) => `url(${p.imgSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  mix-blend-mode: lighten;
  padding: 25px;

  .TitleDiv {
    font-family: ${(p) => p.theme.fontFamily};
    span {
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: ${(p) => p.theme.lightTextColor};
    }

    h1 {
      font-weight: 300;
      font-size: 34px;
      line-height: 107.3%;
      text-transform: capitalize;
      color: ${(p) => p.theme.textColor};
    }
  }
`;
