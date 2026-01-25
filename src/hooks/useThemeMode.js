// useThemeMode.js: logic for managing theme mode (light/dark/system)
// Nơi chứa logic để quản lý chế độ chủ đề (sáng/tối/hệ thống) VD: chỉnh sang chế độ tối hoặc là sáng, ...

import { useColorScheme } from "@mui/material";

const useThemeMode = () => {
  const { mode, setMode, systemMode } = useColorScheme();

  return {
    mode,
    systemMode,
    setLight: () => setMode("light"),
    setDark: () => setMode("dark"),
    setSystem: () => setMode("system"),
    setMode,
  };
};

export default useThemeMode;
