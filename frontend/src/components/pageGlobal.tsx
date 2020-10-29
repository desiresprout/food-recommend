import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background: #f8f9fa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, #root {
  height: 100%;
}
`;

const Block = styled.div``;

const PageGlobal: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default PageGlobal;
