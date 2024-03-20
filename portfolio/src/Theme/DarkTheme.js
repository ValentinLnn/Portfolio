import { createTheme, ThemeProvider } from "@mui/material/styles";

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
  },
});

export default function DarkThemeProvider({ children }) {
  return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>;
}
