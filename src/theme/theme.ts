import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export const lightTheme = createTheme({
  typography: {
    fontFamily: `"Wix Madefor Text", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      light: "#339dff",
      main: "#0084ff",
      dark: "#006ACC",
      contrastText: "#fff",
    },
    platter: {
      color: colors,
    },
  },
});
