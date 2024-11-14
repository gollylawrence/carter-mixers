"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: [
      "Gotham Medium",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(", "),
    // H1 to H6 typography settings
    h1: {
      fontWeight: 700,
      fontSize: "2.125rem", // Example size for H1
      lineHeight: 1.5,
      textTransform: "uppercase"
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.75rem", // Example size for H2
      lineHeight: 1.5,
      textTransform: "uppercase"
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem", // Example size for H3
      lineHeight: 1.5,
      textTransform: "uppercase"
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.25rem", // Example size for H4
      lineHeight: 1.5,
      textTransform: "uppercase"
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem", // Example size for H5
      lineHeight: 1.5,
      textTransform: "uppercase"
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem", // Example size for H6, same as your default
      lineHeight: 1.75,
      textTransform: "uppercase"
    },

    // Default body typography, if needed
    body1: {
      fontFamily: "var(--font-roboto)",
      fontWeight: 400,
      fontSize: "1rem", // Default size for body text
      lineHeight: 1.5
    },
    body2: {
      fontFamily: "var(--font-roboto)",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.5
    }
  },
  palette: {
    primary: {
      main: "#3d5a80", // The base sky blue
      light: "#98c1d9", // A lighter variant of the primary color
      dark: "#0F2F5E" // A darker shade for contrast
    },
    secondary: {
      main: "#038EDF", // A deep blue for complementary use
      light: "#c1e3ef", // Soft blue as a secondary light color
      dark: "#122140" // Dark navy for deeper elements like headers
    },
    background: {
      default: "#eff9fe", // Very light blue, almost white, for backgrounds
      paper: "#d6f2fc" // Light variant suitable for card backgrounds
    },
    text: {
      primary: "#122140", // Dark navy for primary text to maintain contrast
      secondary: "#5a96b2" // Slightly softer for secondary text,
    }
  }
});

export default theme;
