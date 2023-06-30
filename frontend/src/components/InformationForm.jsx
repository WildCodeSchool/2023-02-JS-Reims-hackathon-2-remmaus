/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/label-has-associated-control */
function InformationForm() {
  const [modeles, setModeles] = useState();
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"}/modeles`
    )
      .then((res) => res.json())
      .then((data) => {
        setModeles(data);
      });
  }, []);
  return (
    <div className="main-menu">
      <h1 className="titleMainMenu">Recherche un téléphone déjà existant</h1>
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="modele" id="modele" required />
            <div className="underline" />
            <label htmlFor="modele">Modèle</label>
          </div>
        </div>
        <Link to="/info/result">
          <button type="button" className="linkMenu">
            Recherche
          </button>
        </Link>
      </form>
    </div>
  );
}

export default InformationForm;
