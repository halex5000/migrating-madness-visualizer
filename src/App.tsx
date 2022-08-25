import "./App.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import Chart from "./Chart";
import Connection from "./Connection";
import { useState } from "react";
import Code from "./Code";
function App() {
  const [usageData, setUsageData] = useState<UsageData[]>([
    {
      time: 1661030992467,
      versionOne: 1,
      versionTwo: 0,
      versionOneAverage: 0.6,
      versionTwoAverage: 0.4,
    },
    {
      time: 1661030997472,
      versionOne: 9,
      versionTwo: 0,
      versionOneAverage: 0.4,
      versionTwoAverage: 0.6,
    },
    {
      time: 1661031285950,
      versionOne: 0,
      versionTwo: 7,
      versionOneAverage: 0.6,
      versionTwoAverage: 0.4,
    },
    {
      time: 1661031290953,
      versionOne: 1,
      versionTwo: 0,
      versionOneAverage: 0.4,
      versionTwoAverage: 0.6,
    },
    {
      time: 1661031524647,
      versionOne: 2,
      versionTwo: 2,
      versionOneAverage: 0.6,
      versionTwoAverage: 0.4,
    },
    {
      time: 1661031529658,
      versionOne: 2,
      versionTwo: 3,
      versionOneAverage: 0.4,
      versionTwoAverage: 0.6,
    },
    {
      time: 1661031534658,
      versionOne: 5,
      versionTwo: 1,
      versionOneAverage: 0.6,
      versionTwoAverage: 0.4,
    },
  ]);

  return (
    <>
      <Container maxWidth="xl">
        <Connection setUsageData={setUsageData} usageData={usageData} />
        <Grid container>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Card variant="outlined" raised={true}>
              <CardHeader title="Timeseries data of API usage rate by version" />
              <CardMedia>
                <Chart usageData={usageData} />
              </CardMedia>
              <CardContent>
                <h2>Time</h2>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Code />
      </Container>
    </>
  );
}

export default App;
