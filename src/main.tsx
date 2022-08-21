import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider, useSnackbar } from "notistack";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      preventDuplicate
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
