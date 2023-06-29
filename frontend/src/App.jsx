import { Routes, Route } from "react-router-dom";

import "./App.css";
import Categorize from "./pages/Categorize";
import Informations from "./pages/Informations";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/info" element={<Informations />} />
        <Route path="/info/:id" element="" />
      </Routes>
    </div>
  );
}

export default App;
