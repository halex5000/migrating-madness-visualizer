import "./App.css";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Chart from "./Chart";
import Connection from "./Connection";
import { useState } from "react";
import Code from "./Code";

function App() {
  const [usageData, setUsageData] = useState<UsageData[]>([
    { time: 1661030992467, versionOne: 1, versionTwo: 0 },
    { time: 1661030997472, versionOne: 9, versionTwo: 0 },
    { time: 1661031285950, versionOne: 0, versionTwo: 7 },
    { time: 1661031290953, versionOne: 1, versionTwo: 0 },
    { time: 1661031524647, versionOne: 2, versionTwo: 2 },
    { time: 1661031529658, versionOne: 2, versionTwo: 3 },
    { time: 1661031534658, versionOne: 5, versionTwo: 1 },
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
