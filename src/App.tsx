import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <div>JobsCalc</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
