import { Box, Paper, Grid, styled, Stack } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

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
  <Grid container>
    <Grid item>
      <Stack spacing={2}>
        <Box bgcolor="#e6e6e6">
          <Item elevation={24}>
            <QRCode />
          </Item>
        </Box>
        <Box bgcolor={"#282828"}>
          <Item elevation={24}>
            <h1>Scan me!</h1>
          </Item>
        </Box>
      </Stack>
    </Grid>
  </Grid>
);
