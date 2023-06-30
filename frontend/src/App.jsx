import { Routes, Route } from "react-router-dom";

import "./App.css";
import Categorize from "./pages/Categorize";
import Informations from "./pages/Informations";
import Accueil from "./components/Accueil";
import FAQ from "./components/FAQ";
import MemberChat from "./components/MemberChatForm";
import QrCodePage from "./pages/QrCodePage";
import ConfirmationPage from "./components/ConfirmationPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/info" element={<Informations />} />
        <Route path="/qr-code" element={<QrCodePage />} />
        <Route path="/info/result" element={<SearchPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/chat" element={<MemberChat />} />
        <Route
          path="/categorize/confirmation/:id"
          element={<ConfirmationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
