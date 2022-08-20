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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicTimeline() {
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

  const statusMap = {
    [ReadyState.CONNECTING]: {
      label: "Connecting",
      color: "info",
      icon: <NetworkCheck />,
    },
    [ReadyState.OPEN]: {
      label: "Successfully Connected!",
      color: "success",
      icon: <CloudDone />,
    },
    [ReadyState.CLOSING]: {
      label: "Closing",
      color: "info",
      icon: <CheckCircle />,
    },
    [ReadyState.CLOSED]: {
      label: "Closed",
      color: "info",
      icon: <CheckCircle />,
    },
    [ReadyState.UNINSTANTIATED]: {
      label: "Instantiating",
      color: "secondary",
      icon: <HourglassTop />,
    },
  };

  const connectionStatus = statusMap[readyState];

  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
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
  );
}
