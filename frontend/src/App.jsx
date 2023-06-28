import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element="" />
        <Route path="/categorize" element="" />
        <Route path="/info" element="" />
        <Route path="/info/:id" element="" />
      </Routes>
    </div>
  );
}

export default App;
