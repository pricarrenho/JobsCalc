import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
