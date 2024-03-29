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
        {smartphone && (
          <div className="phone-info">
            <h2>Résumé des données du téléphone :</h2>
            <p className="phone-info-item">Marque : {smartphone.marque}</p>
            <p className="phone-info-item">Modèle : {smartphone.modele}</p>
            <p className="phone-info-item">RAM : {smartphone.memory}</p>
            <p className="phone-info-item">Stockage : {smartphone.stockage}</p>
            <p className="phone-info-item">
              Indice Antutu : {smartphone.antutu}
            </p>
            <p className="phone-info-item">Prix : {smartphone.prix}</p>
          </div>
        )}
        <QrCode />
      </div>
    </div>
  );
}

export default ConfirmationPage;
