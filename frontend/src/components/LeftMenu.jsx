import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="left-menu">
      <Link to="/">
        <img className="logo" src="../src/images/logoremmaus.png" alt="" />
      </Link>
      <Link to="/categorize">
        <button type="button" className="linkMenu">
          Enregistrement
        </button>
      </Link>
      <Link to="/info">
        <button type="button" className="linkMenu">
          Informations
        </button>
      </Link>
      <h4 className="textLeftMenu">Remmaüs</h4>

      <Link to="/FAQ" className="linkFaq">
        <button type="button" className="linkMenu">
          FAQ
        </button>
      </Link>

      <h6 className="textLeftMenu">
        Aurélien / Aylin / Flavien / Julien / Nils{" "}
      </h6>
    </div>
  );
}

export default LeftMenu;
