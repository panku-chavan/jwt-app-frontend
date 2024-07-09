import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#fff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#fff",
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
          "& .MuiInputBase-input": {
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderColor: "#fff",
          "&:hover": {
            borderColor: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
