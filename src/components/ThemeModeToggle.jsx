// ThemeModeToggle.jsx: the UI of the theme mode toggle button
// (nơi chứa UI của nút chuyển đổi chế độ sáng/tối)

import { LightMode, DarkMode, SettingsBrightness } from "@mui/icons-material";
import useThemeMode from "../hooks/useThemeMode";
import { Box, ButtonGroup, Button, Tooltip } from "@mui/material";

const ThemeModeToggle = () => {
  const { mode, setMode } = useThemeMode();

  const modes = [
    { key: "light", label: "Light Mode", icon: <LightMode /> },
    { key: "dark", label: "Dark Mode", icon: <DarkMode /> },
    { key: "system", label: "System Mode", icon: <SettingsBrightness /> },
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
          <Tooltip title={m.label} key={m.key}>
            <Button
              onClick={() => setMode(m.key)}
              variant={mode === m.key ? "contained" : "outlined"}
              startIcon={m.icon}
            >
              {/* Label chỉ hiện từ md trở lên */}
              <Box
                sx={{
                  display: {
                    xs: "none", //      hidden on extra-small screens (mobile - xs screens)
                    sm: "flex", //    shown on small screens and up (tablet - sm screens, desktop - md, lg, xl)
                  },
                }}
              >
                {m.label}
              </Box>
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ThemeModeToggle;
