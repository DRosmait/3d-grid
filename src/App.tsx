import React from "react";
import styled from "styled-components";

import Grid from "./components/Grid";

const TransformWrapper = styled.div`
  perspective-origin: 50% 50%;
  transform: perspective(31.15em) rotateY(-10deg) translateY(10%);
  transition: all 0.4s ease-out;
`;

function App() {
  return (
    <div>
      <h1 className="u-txt-al-center">3d grid</h1>

      <TransformWrapper>
        <Grid />
      </TransformWrapper>
    </div>
  );
}

export default App;
