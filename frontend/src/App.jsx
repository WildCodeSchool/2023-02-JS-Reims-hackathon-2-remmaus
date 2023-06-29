import { Routes, Route } from "react-router-dom";

import "./App.css";
import Categorize from "./pages/Categorize";
import Informations from "./pages/Informations";
import Accueil from "./components/Accueil";
import FAQ from "./components/FAQ";
import MemberChat from "./components/MemberChatForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/info" element={<Informations />} />
        <Route path="/info/:id" element="" />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/chat" element={<MemberChat />} />
      </Routes>
    </div>
  );
}

export default App;
