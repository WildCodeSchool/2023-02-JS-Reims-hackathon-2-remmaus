import React, { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import QrCode from "./QrCode";

function ConfirmationPage() {
  const [phoneInfo, setPhoneInfo] = useState(null);

  useEffect(() => {
    const fakePhoneInfo = {
      marque: "Samsung",
      modèle: "Galaxy S20",
      ram: "8 Go",
      stockage: "128 Go",
      indiceAntutu: "300000",
    };

    setPhoneInfo(fakePhoneInfo);
  }, []);

  return (
    <div className="screen">
      <LeftMenu />
      <div className="confirmation-page">
        <h1>Enregistrement terminé</h1>
        {phoneInfo && (
          <div className="phone-info">
            <h2>Résumé des données du téléphone enregistré :</h2>
            <p className="phone-info-item">Marque : {phoneInfo.marque}</p>
            <p className="phone-info-item">Modèle : {phoneInfo.modèle}</p>
            <p className="phone-info-item">RAM : {phoneInfo.ram}</p>
            <p className="phone-info-item">Stockage : {phoneInfo.stockage}</p>
            <p className="phone-info-item">
              Indice Antutu : {phoneInfo.indiceAntutu}
            </p>
          </div>
        )}
        <QrCode />
      </div>
    </div>
  );
}

export default ConfirmationPage;
