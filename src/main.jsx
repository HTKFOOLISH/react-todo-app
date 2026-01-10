import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme.js";

export const Root = () => {
  const [mode, setMode] = useState("light");
  const muiTheme = useMemo(() => theme(mode), [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
