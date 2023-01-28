import styled from "styled-components";

const DefaultButton = styled.button`
  font-family: ${(p) => p.theme.fontFamily};
  text-align: center;
  padding-bottom: 20px;
  border: 1px solid ${(p) => p.theme.primaryColor};
`;

export default DefaultButton;
