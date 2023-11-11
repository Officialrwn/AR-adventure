import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MapPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </>
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
