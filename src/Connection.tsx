import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

let firstData = true;

let average = 0;
let sum = 0;
let versionOneSum = 0;
let versionTwoSum = 0;

export default function BasicTimeline({
  setUsageData,
  usageData,
}: {
  setUsageData: Function;
  usageData: UsageData[];
}) {
  const [socketUrl] = useState(import.meta.env.VITE_SOCKET_URL);
  const [readyStates] = useState([-1]);
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [waitingForData, setWaitingForData] = useState(true);

  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const Action = ({ snackbarId }: { snackbarId: string }) => {
    return (
      <IconButton
        aria-label="delete"
        onClick={() => {
          console.log("click trashcan");
          closeSnackbar(snackbarId);
        }}
      >
        <Delete />
      </IconButton>
    );
  };

  useEffect(() => {
    if (!readyStates.includes(readyState)) {
      console.log(readyState);
      readyStates.push(readyState);
      switch (readyState) {
        case ReadyState.OPEN:
          enqueueSnackbar("Connection successful", {
            variant: "success",
            persist: true,
            key: "success",
            action: <Action snackbarId="success" />,
          });
          enqueueSnackbar("Waiting for data feed to start", {
            variant: "info",
            persist: true,
            key: "waiting",
            action: <Action snackbarId="waiting" />,
          });
          break;
        case ReadyState.UNINSTANTIATED:
          enqueueSnackbar("Initializing", {
            variant: "info",
            persist: true,
            key: "initializing",
            action: <Action snackbarId="initializing" />,
          });
          break;
        case ReadyState.CONNECTING:
          enqueueSnackbar("Connecting", {
            variant: "info",
            persist: true,
            key: "connecting",
            action: <Action snackbarId="connecting" />,
          });
          break;
        case ReadyState.CLOSING:
          enqueueSnackbar("Closing", {
            variant: "warning",
            persist: true,
            key: "closing",
            action: <Action snackbarId="closing" />,
          });
          break;
        case ReadyState.CLOSED:
          enqueueSnackbar("Closed", {
            variant: "error",
            persist: true,
            key: "closed",
            action: <Action snackbarId="closed" />,
          });
          break;
        default:
          break;
      }
    }
  }, [readyState]);

  useEffect(() => {
    if (lastMessage && lastMessage.data) {
      const {
        versionOneCallCount: versionOne,
        versionTwoCallCount: versionTwo,
        time,
      } = JSON.parse(lastMessage?.data);

      console.log("message received", {
        versionOne,
        versionTwo,
        time,
      });

      versionOneSum += versionOne;
      versionTwoSum += versionTwo;
      sum = versionOneSum + versionTwoSum;
      const versionOneAverage = versionOneSum / sum;
      const versionTwoAverage = versionTwoSum / sum;

      if (firstData) {
        firstData = false;
        setUsageData([{ time, versionOne, versionTwo, versionOneAverage, versionTwoAverage }]);
      } else {
        setUsageData([...usageData, { time, versionOne, versionTwo, versionOneAverage, versionTwoAverage }]);
      }
    }
  }, [lastMessage]);

  return <></>;
}
