import React from "react";
import styled from "styled-components";

interface Props {}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, clamp(4rem, 3rem + 16vw, 30rem));
  grid-template-areas:
    "one  two  three  four"
    "one  two  three  four"
    "one  six  six  four"
    "five  six  six  seven"
    "five  six  six  seven"
    "five  six  six  seven";
  grid-auto-rows: clamp(3rem, 2rem + 6vh, 10rem);
  gap: clamp(0.8em, 0.5em + 2vw, 1.25rem);

  @media (min-width: 64em) {
    grid-template-columns: repeat(4, clamp(5rem, 20vw, 30rem));
  }
`;

const GridItem = styled.div`
  background-color: var(--bgc-grid-item);
  border-radius: 1em;
  display: grid;
  /* font-size: clamp(2rem, 1rem + 2vw, 6rem); */
  place-content: center;
  padding: 1em;
  position: relative;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
      0 0 10px 2px rgba(255, 255, 255, 0.5);
    transform: scale(1.05) translate(-10px);
    z-index: 10;
  }

  &:nth-of-type(1) {
    grid-area: one;
  }

  &:nth-of-type(2) {
    grid-area: two;
  }

  &:nth-of-type(3) {
    grid-area: three;
  }

  &:nth-of-type(4) {
    grid-area: four;
  }

  &:nth-of-type(5) {
    grid-area: five;
  }

  &:nth-of-type(6) {
    grid-area: six;
  }

  &:nth-of-type(7) {
    grid-area: seven;
  }
`;

const Grid = ({}: Props) => {
  return (
    <GridContainer className="c-grid">
      <GridItem className="c-grid__item">1</GridItem>
      <GridItem className="c-grid__item">2</GridItem>
      <GridItem className="c-grid__item">3</GridItem>
      <GridItem className="c-grid__item">4</GridItem>
      <GridItem className="c-grid__item">5</GridItem>
      <GridItem className="c-grid__item">6</GridItem>
      <GridItem className="c-grid__item">7</GridItem>
    </GridContainer>
  );
};

export default Grid;
