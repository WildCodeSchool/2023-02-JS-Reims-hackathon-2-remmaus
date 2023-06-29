import React, { useState } from "react";
import "../App.css";
import Welcome from "./Welcome";
import Login from "./Login";

function Accueil() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="accueil-page">
      <header className="header">
        <img src="../src/images/logoremmaus.png" alt="Logo" className="logo" />
      </header>
      {isLogged ? <Welcome /> : <Login setIsLogged={setIsLogged} />}
    </div>
  );
}

export default Accueil;
