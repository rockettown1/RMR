import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

export default function Grid({ width }) {
  let pixels = new Array(200).fill(0);
  const [animate, setAnimate] = useState(false);
  const [grid, setGrid] = useState(pixels);

  const runAnimate = (index) => {
    const temp = [...grid];
    temp[index] = 1;
    setGrid(temp);
  };

  useEffect(() => {
    setAnimate(true);
    runAnimate(Math.floor(Math.random() * 100));
  }, [animate]);

  return (
    <Container>
      {grid.map((a, i) => (
        <Pixel
          key={i}
          role="pixel"
          data-testid={`pixel${i}`}
          animate={a === 1}
          width={width}
          onMouseOver={() => {
            runAnimate(i);
          }}
          onAnimationEnd={() => setAnimate(!animate)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 130vw;
  overflow: hidden;
  top: -120px;
  left: -80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const colorChange = keyframes`
0% {
  background-color: rgba(40,44,52, 0.4);
}
30% {
  background-color: rgba(240,147,251, 0.4)
  
}
60% {
  background-color: rgba(168,237,234, 0.4);
}
100% {
  background-color: none;
}
`;

const Pixel = styled.div`
  height: ${({ width }) => `${width / 8}px`};
  aspect-ratio: 1 / 1;
  transition: all 0.6s;
  animation: ${({ animate }) =>
    animate &&
    css`
      ${colorChange} 3s ease-in-out;
    `};
  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;
