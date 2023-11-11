import "./App.css";
import MapPage from "./pages/MapPage/MapPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import MainPanel from "./components/MainPanel/MainPanel";
import { ViewProvider } from "./contexts/ViewContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewProvider>
        <>
          <GlobalStyles />
          <MainPanel />
          <MapPage />
        </>
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
