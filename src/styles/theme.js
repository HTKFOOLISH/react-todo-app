import { createTheme } from "@mui/material";

const theme = (mode) => {
  const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  return createTheme({
    palette: {
      mode: mode === "system" ? systemMode : mode,
    },
  });
};
export default theme;
