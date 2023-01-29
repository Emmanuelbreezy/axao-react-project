import styled from "styled-components";

export const Col = styled.div`
  display: block;
  padding-top: 5rem;
  width: 100%;
  background-color: ${(p) => p.theme.primaryColor};
  height: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

export const Container = styled.div`
  width: ${(p) => p.theme.containerWidth};
  max-width: ${(p) => p.theme.maxWidth};
  margin: 0 auto;
`;
