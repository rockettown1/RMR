import styled from "styled-components";
import Grid from "./components/Grid";
import { useWindowSize } from "./utils/useWindowSize";

function App() {
  const { width } = useWindowSize();

  return (
    <Container>
      <Poem>
        <Grid width={width}></Grid>
        <h1>Let everything happen to you.</h1>
        <h1>Beauty and terror.</h1>
        <h1>Just keep going.</h1>
        <h1>No feeling is final.</h1>
        <Author>
          <p>- Rainer Maria Rilke</p>
        </Author>
      </Poem>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Poem = styled.div`
  position: relative;

  h1 {
    font-size: 20vw;
    line-height: 14vw;
    color: white;
    margin: 0;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    color: white;
  }
`;
