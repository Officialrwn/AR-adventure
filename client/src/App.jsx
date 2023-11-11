import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import MapPage from "./pages/MapPage/MapPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import { useState } from "react";
import { Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu  open={open} setOpen={setOpen} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/character" element={<CharacterPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
