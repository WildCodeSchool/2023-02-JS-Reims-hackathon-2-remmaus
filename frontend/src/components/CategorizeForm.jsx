import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/label-has-associated-control */
function CategorizeForm() {
  const [marques, setMarques] = useState([]);
  const [modeles, setModeles] = useState([]);
  const [selectMarque, setSelectMarque] = useState();
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"}/marques`
    )
      .then((res) => res.json())
      .then((data) => {
        setMarques(data);
      });
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
      <h1 className="titleMainMenu">
        Commencer l'Enregistrement de nouveaux téléphones
      </h1>
      <form action="#" className="form-categorize">
        <div className="form-row">
          <div className="input-data">
            {/* <input type="text" name="modele" id="modele" required />
            <div className="underline" /> */}
            <label className="select-label" htmlFor="modele">
              Marque & Modèle
            </label>
            <select
              name="marque"
              id="marque"
              onChange={(e) => setSelectMarque(e.target.value)}
            >
              <option value="" selected>
                -- Select Marque --
              </option>
              {marques.map((marque) => (
                <option key={marque.marque} value={marque.marque}>
                  {marque.marque}
                </option>
              ))}
            </select>
            {selectMarque && (
              <select name="modele" id="modele">
                <option value="" selected>
                  -- Select modele --
                </option>
                {modeles
                  .filter((e) => e.marque === selectMarque)
                  .map((modele) => (
                    <option key={modele.id} value={modele.id}>
                      {modele.name}
                    </option>
                  ))}
              </select>
            )}
          </div>
          <div className="input-data">
            <label className="select-label" htmlFor="ram">
              RAM
            </label>
            <select name="ram" id="ram">
              <option value="" selected>
                -- Select Option --
              </option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="3">3 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
              <option value="12">12 Go</option>
              <option value="16">16 Go</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <label className="select-label" htmlFor="stockage">
              Stockage
            </label>
            <select name="stockage" id="stockage">
              <option value="" selected>
                -- Select Option --
              </option>
              <option value="8">8 Go</option>
              <option value="16">16 Go</option>
              <option value="32">32 Go</option>
              <option value="64">64 Go</option>
              <option value="128">128 Go</option>
              <option value="256">256 Go</option>
              <option value="512">512 Go</option>
              <option value="1024">1024 Go</option>
            </select>
          </div>
          <div className="input-data">
            <input type="text" name="indice" id="indice" required />
            <div className="underline" />
            <label htmlFor="indice">Indice Antutu</label>
          </div>
        </div>
        <div className="form-row">
          <label className="select-label" htmlFor="state">
            Etat du téléphone
          </label>
          <select name="state" id="state" className="select-bottom">
            <option value="" selected>
              -- Select Option --
            </option>
            <option value="-100">DEEE</option>
            <option value="-50">Réparable</option>
            <option value="-10">Bloqué</option>
            <option value="-5">Reconditionnable</option>
            <option value="0">Reconditionné</option>
          </select>
        </div>
        <button type="button" className="linkMenu">
          Confirmez l'enregistrement
        </button>
      </form>
    </div>
  );
}

export default CategorizeForm;
