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
import ThemeModeToggle from "./components/ThemeModeToggle";

function App() {
  return (
    <>
      {/* ----- MODE TOGGLE ----- */}
      <ThemeModeToggle />
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
