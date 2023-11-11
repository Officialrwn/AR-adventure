import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/map" element={<MapPage />} /> */}
        <Route path="/character" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
