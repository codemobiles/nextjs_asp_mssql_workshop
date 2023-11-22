import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue, orange, red } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const drawerWidth = 240;
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'url("/static/img/background_menu.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          width: drawerWidth,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
  typography: {
    fontFamily: "Chakra Petch",
    // fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,
  palette: {
    mode: "light",
    primary:
      process.env.NEXT_PUBLIC_IS_PRODUCTION == "0" ? { main: blue[900] } : blue,
    background: {
      default: "#FFF",
    },
  },
});

export default theme;
