import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {
  Chip,
  Box,
  AppBar,
  Paper,
  styled,
  Container,
  Toolbar,
} from "@mui/material";

import {
  CheckCircle,
  CloudDone,
  HourglassTop,
  NetworkCheck,
} from "@mui/icons-material";

const usageData: UsageData[] = [];

export default function BasicTimeline({setUsageData}: {
  setUsageData: Function;
}) {
  const [socketUrl] = useState(import.meta.env.VITE_SOCKET_URL);
  const [readyStates] = useState([-1]);
  const [messageHistory, setMessageHistory] = useState<any[]>([]);

  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  useEffect(() => {
    if (!readyStates.includes(readyState)) {
      readyStates.push(readyState);
    }
  }, [readyState]);

  useEffect(() => {
    if (lastMessage && lastMessage.data) {
      const { versionOneCallCount: versionOne, versionTwoCallCount: versionTwo, time } = JSON.parse(
        lastMessage?.data
      );
      console.log("message received", {
        versionOne,
        versionTwo,
        time,
      });

      setUsageData([
        {time, versionOne, versionTwo},
        ...usageData,
      ]);
    }
  }, [lastMessage]);

  const statusMap = {
    [ReadyState.CONNECTING]: {
      label: "Connecting",
      color: "info" as Color,
      icon: <NetworkCheck />,
    },
    [ReadyState.OPEN]: {
      label: "Successfully Connected!",
      color: "success" as Color,
      icon: <CloudDone />,
    },
    [ReadyState.CLOSING]: {
      label: "Closing",
      color: "info" as Color,
      icon: <CheckCircle />,
    },
    [ReadyState.CLOSED]: {
      label: "Closed",
      color: "info" as Color,
      icon: <CheckCircle />,
    },
    [ReadyState.UNINSTANTIATED]: {
      label: "Instantiating",
      color: "secondary" as Color,
      icon: <HourglassTop />,
    },
  };

  type Color = "primary" | "secondary" | "info";

  const connectionStatus = statusMap[readyState];

  return (
    <>
      <AppBar
        color="primary"
        sx={{ display: { xs: "none", lg: "block", xl: "block", backgroundColor: "#282828" } }}
      >
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {readyStates.map((state: ReadyState, index) => {
                const { label, icon, color } = statusMap[state];
                return (
                  <div>
                    <Chip icon={icon} color={color} label={label} key={index} />
                  </div>
                );
              })}
              {connectionStatus === statusMap[1] ? (
                <Chip
                  icon={statusMap[1].icon}
                  color={statusMap[1].color}
                  label={statusMap[1].label}
                />
              ) : null}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {connectionStatus === statusMap[1] ? (
        <AppBar
          color="secondary"
          sx={{ display: { xs: "block", md: "block", lg: "none", xl: "none" } }}
        >
          Successfully Connected
        </AppBar>
      ) : null}
    </>
  );
}
