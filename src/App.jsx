// import { useState } from "react";
import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import {
  ButtonGroup,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  AccessAlarm,
  ThreeDRotation,
  DarkMode,
  LightMode,
  SettingsBrightness,
} from "@mui/icons-material";
import { Box } from "@mui/material";

function App({ setMode }) {
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
          border: (theme) =>
            `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
        }}
      >
        {/* === CHANGE MODE === */}
        <ButtonGroup variant="outlined" size="larger">
          {modes.map((m) => (
            <Button key={m.key} onClick={() => setMode(m.key)}>
              {m.icon}&nbsp; {m.label}
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
