import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil-page">
      <header className="header">
        <img src="../src/images/logoremmaus.png" alt="Logo" className="logo" />
      </header>
      <div className="content">
        <h1 className="title">Bienvenue sur Remmaüs</h1>
        <div className="buttons">
          <Link to="/info">
            <button type="button" className="greenButton">
              Rechercher des téléphones
            </button>
          </Link>
          <Link to="/categorize">
            <button type="button" className="greenButton">
              Ajouter des téléphones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
