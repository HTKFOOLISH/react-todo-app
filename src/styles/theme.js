import { createTheme, ThemeProvider } from "@mui/material";

const theme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });

export default theme;
