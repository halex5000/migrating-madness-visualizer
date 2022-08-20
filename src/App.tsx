import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "./App.css";
import { Chip, Grid, Stack, Box, AppBar } from "@mui/material";
import Chart from "./Chart";
import Code from "./Code";

function App() {
  const [count, setCount] = useState(0);

  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(
    "wss://crq78afv70.execute-api.us-east-1.amazonaws.com/dev"
  );
  const [messageHistory, setMessageHistory] = useState<any[]>([]);

  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: {
      status: "Connecting",
      color: "primary",
    },
    [ReadyState.OPEN]: {
      status: "Open",
      color: "primary",
    },
    [ReadyState.CLOSING]: {
      status: "Closing",
      color: "primary",
    },
    [ReadyState.CLOSED]: {
      status: "Closed",
      color: "primary",
    },
    [ReadyState.UNINSTANTIATED]: {
      status: "Connecting",
      color: "primary",
    },
  }[readyState];

  return (
    <Grid container maxWidth="large">
      <Grid xs={12} item>
        <AppBar>
          <Box>
            <Stack direction="row" spacing={1}>
              <Chip
                label={`Socket connection: ${connectionStatus.status}`}
                color="primary"
              />
            </Stack>
          </Box>
        </AppBar>
      </Grid>
      <Grid xs={4} item>
        <Code />
      </Grid>
      <Grid xs={4} item>
        <Chart />
      </Grid>
    </Grid>
  );
}

export default App;
