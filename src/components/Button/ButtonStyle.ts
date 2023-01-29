import device from "@axao/utils/devices";
import styled from "styled-components";

interface DefaultButtonPropsType {
  outline: boolean;
  fontSize?: string;
}

const DefaultButton = styled.button<DefaultButtonPropsType>`
  font-family: ${(p) => p.theme.fontFamily};
  -webkit-appearance: button;
  border: ${(p) =>
    p.outline ? ` 1px solid rgba(255, 255, 255, 0.3)` : "none"};
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 300;
  width: 120px;
  height: 50px;
  background-color: transparent;
  font-size: 14px;
  line-height: 0px;
  text-transform: capitalize;
  cursor: pointer;
  color: ${(p) => p.theme.whiteColor};

  @media ${device.laptop} {
    width: 152px;
    height: 57px;
    line-height: 26px;
    font-size: ${(p) => (p.fontSize ? p.fontSize : "17px")};
  }
`;

export default DefaultButton;
