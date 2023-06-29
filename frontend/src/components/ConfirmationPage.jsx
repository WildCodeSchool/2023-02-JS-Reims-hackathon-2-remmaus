import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import QrCode from "./QrCode";

function ConfirmationPage() {
  const { id } = useParams();
  const [smartphone, setSmartphone] = useState([]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/smartphones/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSmartphone(data);
      });
  }, []);

  return (
    <div className="screen">
      <LeftMenu />
      <div className="confirmation-page">
        <h1>Enregistrement terminé</h1>
        {smartphone && (
          <div className="phone-info">
            <h2>Résumé des données du téléphone enregistré :</h2>
            <p className="phone-info-item">Marque : {smartphone.marque}</p>
            <p className="phone-info-item">Modèle : {smartphone.name}</p>
            <p className="phone-info-item">RAM : {smartphone.memory}</p>
            <p className="phone-info-item">Stockage : {smartphone.stockage}</p>
            <p className="phone-info-item">
              Indice Antutu : {smartphone.antutu}
            </p>
          </div>
        )}
        <QrCode />
      </div>
    </div>
  );
}

export default ConfirmationPage;
