import { Box, Button, Container, Stack } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Draggable from "react-draggable";

const QRCode = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <Draggable>
      <Container>
        <Box
          sx={{
            width: 256,
            height: 256,
            position: "relative",
            zIndex: 'modal'
          }}
        >
          <Stack>
            <Button
              onClick={() => {
                setShowCode(!showCode);
              }}
            >
              {showCode ? "Hide" : "Show"}
            </Button>
            <Box visibility={showCode ? "visible" : "hidden"}>
              <QRCodeSVG
                value={window.location.href}
                size={256}
                bgColor={"#e6e6e6"}
                fgColor={"#000000"}
                level={"H"}
                includeMargin={true}
                imageSettings={{
                  src: "./Osmo-Black-Transparent.png",
                  x: undefined,
                  y: undefined,
                  height: 48,
                  width: 48,
                  excavate: true,
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Draggable>
  );
};

export default () => {
  return <QRCode />;
};
