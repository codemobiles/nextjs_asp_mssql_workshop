import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue, orange, red } from "@mui/material/colors";

// MUI Style
// https://www.youtube.com/watch?v=dmjHm5Gx0Yg&list=PLjPfp4Ph3gBpbVPivsoIaOhfeNwmBskI8
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const drawerWidth = 240;
const theme = createTheme({
  spacing: 8,
});

export default theme;
