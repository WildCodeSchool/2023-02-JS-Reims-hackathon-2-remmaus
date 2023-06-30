import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/label-has-associated-control */
function InformationForm() {
  const [info, setInfo] = useState("");
  return (
    <div className="main-menu">
      <h1 className="titleMainMenu">Recherche un téléphone déjà existant</h1>
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="id"
              id="id"
              onChange={(e) => setInfo(e.target.value)}
              required
            />
            <div className="underline" />
            <label htmlFor="id">ID ou Modèle</label>
          </div>
        </div>
        <Link to={`/categorize/confirmation/${info}`}>
          <button type="button" className="linkMenu">
            Recherche
          </button>
        </Link>
      </form>
    </div>
  );
}

export default InformationForm;
