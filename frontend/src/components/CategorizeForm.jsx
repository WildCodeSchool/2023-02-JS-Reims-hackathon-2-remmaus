import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/label-has-associated-control */
function CategorizeForm() {
  const [marques, setMarques] = useState([]);
  const [modeles, setModeles] = useState([]);
  const [selectMarque, setSelectMarque] = useState();
  const [selectModele, setSelectModele] = useState();
  const modelRef = useRef();
  const indiceRef = useRef();
  const stockageRef = useRef();
  const memoireRef = useRef();
  const ponderationRef = useRef();
  const modelNameRef = useRef(null);
  const marqueNameRef = useRef(null);
  const prixRef = useRef(null);
  const nav = useNavigate();
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetch(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
            }/smartphones`,
            {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(
                modelNameRef.current
                  ? {
                      model: modelNameRef.current.value,
                      marque: marqueNameRef.current.value,
                      prix_ref: prixRef.current.value,
                      modele_id: modelRef.current.value,
                      indice: indiceRef.current.value,
                      stockage: stockageRef.current.value,
                      memoire: memoireRef.current.value,
                      ponderation: ponderationRef.current.value,
                    }
                  : {
                      modele_id: modelRef.current.value,
                      indice: indiceRef.current.value,
                      stockage: stockageRef.current.value,
                      memoire: memoireRef.current.value,
                      ponderation: ponderationRef.current.value,
                    }
              ),
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => nav(`/categorize/confirmation/${data[0]}`));
        }}
        className="form-categorize"
      >
        <div className="form-row">
          <div className="input-data">
            {/* <input type="text" name="modele" id="modele" required />
            <div className="underline" /> */}
            <label className="select-label" htmlFor="modele">
              Marque & Modèle
            </label>
            {selectMarque === "new" ? (
              <input ref={marqueNameRef} type="text" placeholder="New Marque" />
            ) : (
              <select
                ref={marqueNameRef}
                name="marque"
                id="marque"
                defaultValue=""
                onChange={(e) => setSelectMarque(e.target.value)}
              >
                <option value="">-- Select Marque --</option>
                {marques.map((marque) => (
                  <option key={marque.marque} value={marque.marque}>
                    {marque.marque}
                  </option>
                ))}
                {/* <option value="new">-- New Marque --</option> */}
              </select>
            )}
            {selectMarque && selectMarque !== "new" && (
              <select
                ref={modelRef}
                name="modele"
                id="modele"
                defaultValue=""
                onChange={(e) => setSelectModele(e.target.value)}
              >
                <option value="">-- Select modele --</option>
                {modeles
                  .filter((e) => e.marque === selectMarque)
                  .map((modele) => (
                    <option key={modele.id} value={modele.id}>
                      {modele.name}
                    </option>
                  ))}
                <option value="new">-- New Modele --</option>
              </select>
            )}
            {selectMarque === "new" || selectModele === "new" ? (
              <>
                <input
                  ref={modelNameRef}
                  type="text"
                  placeholder="New Modele"
                />
                {/* <input ref={prixRef} type="text" placeholder="prix ref" /> */}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="input-data">
            <label className="select-label" htmlFor="ram">
              RAM
            </label>
            <select ref={memoireRef} name="ram" id="ram" defaultValue="">
              <option value="">-- Select Option --</option>
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
            <select
              ref={stockageRef}
              name="stockage"
              id="stockage"
              defaultValue=""
            >
              <option value="">-- Select Option --</option>
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
            <input
              ref={indiceRef}
              type="text"
              name="indice"
              id="indice"
              required
            />
            <div className="underline" />
            <label htmlFor="indice">Indice Antutu</label>
          </div>
        </div>
        <div className="form-row">
          <label className="select-label" htmlFor="state">
            Etat du téléphone
          </label>
          <select
            ref={ponderationRef}
            name="state"
            id="state"
            className="select-bottom"
            defaultValue=""
          >
            <option value="">-- Select Option --</option>
            <option value="0">DEEE</option>
            <option value="0.5">Réparable</option>
            <option value="0.9">Bloqué</option>
            <option value="0.95">Reconditionnable</option>
            <option value="1">Reconditionné</option>
          </select>
        </div>
        <button type="submit" className="linkMenu">
          Confirmez l'enregistrement
        </button>
      </form>
    </div>
  );
}

export default CategorizeForm;
