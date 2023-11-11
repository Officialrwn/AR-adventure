import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import { ViewProvider } from "./contexts/ViewContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewProvider>
        <>
          <GlobalStyles />
          <HomePage />
        </>
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
