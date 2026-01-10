// import { useState } from "react";
import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Button from "@mui/material/Button";
import {
  AccessAlarm,
  ThreeDRotation,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { Box } from "@mui/material";

function App({ mode, setMode }) {
  return (
    <>
      <Box
        sx={{
          p: 2,
          border: `1px solid ${mode === "light" ? "black" : "white"}`,
          width: "65%",
          margin: "20px auto",
        }}
      >
        {/* === CHANGE MODE === */}
        <Button
          variant="contained"
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? <DarkMode /> : <LightMode />}
          &nbsp;
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
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
