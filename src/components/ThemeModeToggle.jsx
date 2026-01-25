// ThemeModeToggle.jsx: the UI of the theme mode toggle button
// (nơi chứa UI của nút chuyển đổi chế độ sáng/tối)

import { LightMode, DarkMode, SettingsBrightness } from "@mui/icons-material";
import useThemeMode from "../hooks/useThemeMode";
import { Box, ButtonGroup, Button } from "@mui/material";

const ThemeModeToggle = () => {
  const { mode, setMode } = useThemeMode();

  const modes = [
    { key: "light", label: "Light", icon: <LightMode /> },
    { key: "dark", label: "Dark", icon: <DarkMode /> },
    { key: "system", label: "System", icon: <SettingsBrightness /> },
  ];

  return (
    <Box
      sx={{
        // New
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        // color: "text.primary",
        borderRadius: 1,
        p: 3,
        minHeight: "56px",
        //
        border: "1px solid ",
        borderColor: mode === "dark" ? "grey.300" : "grey.500",
      }}
    >
      {/* === CHANGE MODE === */}
      <ButtonGroup variant="outlined" size="large">
        {modes.map((m) => (
          <Button
            key={m.key}
            onClick={() => setMode(m.key)}
            variant={mode === m.key ? "contained" : "outlined"}
            startIcon={m.icon}
          >
            {m.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ThemeModeToggle;
