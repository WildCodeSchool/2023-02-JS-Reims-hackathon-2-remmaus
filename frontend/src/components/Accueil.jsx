import React from "react";
import "../App.css";

function Accueil() {
  return (
    <>
      <header className="header">
        <img src="../src/images/logoremmaus.png" alt="Logo" className="logo" />
      </header>
      <div className="content">
        <h1 className="title">Bienvenue sur Remmaüs</h1>
        <div className="buttons">
          <button type="button" className="greenButton">
            Rechercher des téléphones
          </button>
          <button type="button" className="greenButton">
            Ajouter des téléphones
          </button>
        </div>
      </div>
    </>
  );
}

export default Accueil;
