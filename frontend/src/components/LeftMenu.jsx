/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { Link } from "react-router-dom";

function LeftMenu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className={menu ? "left-menu-abso" : "left-menu"}>
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
        <Link to="/FAQ" className="linkFaq">
          <button type="button" className="linkMenu">
            FAQ
          </button>
        </Link>
        <h6 className="textLeftMenu">
          Aurélien / Aylin / Flavien / Julien / Nils{" "}
        </h6>
      </div>
      <div
        className={menu ? "arrow-open" : "arrow"}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <img className="right-arrow" alt="" src="../src/images/arrow.png" />
      </div>
    </>
  );
}

export default LeftMenu;
