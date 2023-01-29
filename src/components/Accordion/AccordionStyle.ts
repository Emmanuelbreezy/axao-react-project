import device from "@axao/utils/devices";
import styled from "styled-components";

export const AccordionGroup = styled.div`
  width: 100%;
  display: block;
  height: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const AccordionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  padding-bottom: 5px;

  h5 {
    color: ${(p) => p.theme.textColor};
    font-size: 20px;
    font-family: ${(p) => p.theme.fontFamily};
    font-weight: 300;
    line-height: 107.3%;
    text-transform: capitalize;

    @media ${device.laptop} {
      font-size: 26px;
    }
  }
`;

export const AccordionPanel = styled.div`
  padding-bottom: 60px;

  p {
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 116.8%;
    text-transform: capitalize;
    margin: 0;
    line-height: 30px;
    text-align: left !important;
    text-transform: capitalize;
    color: ${(p) => p.theme.lightTextColor} !important;

    @media ${device.laptop} {
      width: 90%;
    }
  }
`;
