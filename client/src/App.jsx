import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import MapPage from "./pages/MapPage/MapPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import { useRef, useState } from "react";
import { BurgerIcon, Menu } from "./components";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <BurgerIcon open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
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
