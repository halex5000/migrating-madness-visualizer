import "./App.css";
import { Container, Grid } from "@mui/material";
import Chart from "./Chart";
import Code from "./Code";
import Connection from "./Connection";

function App() {
  return (
    <Container>
      <Connection />
      <Grid container maxWidth="large">
        <Grid xs={3} item>
          <Code />
        </Grid>
        <Grid xs={9} item>
          <Chart />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
