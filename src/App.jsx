import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";

import { ButtonGroup, Button, Box } from "@mui/material";
import {
  AccessAlarm,
  ThreeDRotation,
  DarkMode,
  LightMode,
  SettingsBrightness,
} from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";

function App() {
  const { mode, setMode } = useColorScheme();

  const modes = [
    { key: "light", label: "Light", icon: <LightMode /> },
    { key: "dark", label: "Dark", icon: <DarkMode /> },
    { key: "system", label: "System", icon: <SettingsBrightness /> },
  ];

  return (
    <>
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
          border: () => `1px solid ${mode === "dark" ? "white" : "black"}`,
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>OK chưa</div>
      {/* Button */}
      <Button variant="text">Text</Button> &nbsp;
      <Button variant="contained">Contained</Button> &nbsp;
      <Button variant="outlined">Outlined</Button> <br />
      <br />
      <Button variant="outlined">Primary</Button> &nbsp;
      <Button variant="outlined" disabled>
        {" "}
        &nbsp; Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <br />
      <br />
      {/* Icons */}
      <AccessAlarm /> &nbsp; <ThreeDRotation />
    </>
  );
}

export default App;
