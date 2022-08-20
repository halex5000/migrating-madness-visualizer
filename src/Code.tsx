import {
  Box,
  Paper,
  Grid,
  styled,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import Draggable from "react-draggable";

const QRCode = () => (
  <QRCodeSVG
    value={window.location.href}
    size={256}
    bgColor={"#e6e6e6"}
    fgColor={"#000000"}
    level={"H"}
    includeMargin={true}
    imageSettings={{
      src: "./src/assets/Osmo-Black-Transparent.png",
      x: undefined,
      y: undefined,
      height: 48,
      width: 48,
      excavate: true,
    }}
  />
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e6e6e6",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#282828",
}));

export default () => (
  <Draggable>
    <div>
      <QRCode />
    </div>
  </Draggable>
);
