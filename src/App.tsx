import "./App.css";
import { Container, Grid } from "@mui/material";
import Chart from "./Chart";
import Code from "./Code";
import Connection from "./Connection";

function App() {
  return (
    <Container>
      <Connection />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xl={3}
          lg={3}
          sx={{ display: { xs: "none", md: "none", lg: "block", xl: "block" } }}
        >
          <Code />
        </Grid>
        <Grid item xl={9} lg={9}>
          <Chart />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
