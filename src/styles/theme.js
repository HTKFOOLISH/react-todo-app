import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-color-scheme" },
  colorSchemes: {
    light: { palette: { mode: "light" } },
    dark: { palette: { mode: "dark" } },
  },
});

export default theme;
