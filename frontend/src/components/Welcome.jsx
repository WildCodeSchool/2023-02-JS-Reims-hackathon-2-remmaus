import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="contentMain">
      <h1 className="title">Bienvenue sur Remmaüs</h1>
      <div className="buttons">
        <Link to="/categorize">
          <button type="button" className="greenButton">
            Ajouter des téléphones
          </button>
        </Link>
        <Link to="/info">
          <button type="button" className="greenButton">
            Rechercher des téléphones
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
