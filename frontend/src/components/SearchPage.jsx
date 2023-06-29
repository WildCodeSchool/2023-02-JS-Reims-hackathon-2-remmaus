import React, { useEffect, useState } from "react";

function SearchPage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fakePhoneInfo = {
      marque: "Samsung",
      modèle: "Galaxy S20",
      ram: "8 Go",
      stockage: "128 Go",
      indiceAntutu: "300000",
    };

    setPhones(fakePhoneInfo);
  }, []);

  return (
    <div className="search-page">
      <h1>Résultats de recherche</h1>
      {phones && (
        <div className="phone-card">
          <img
            className="img-phone"
            src="../src/images/galaxyS20.jpg"
            alt="telephone"
          />
          <div className="phone-details">
            <h2>
              {phones.marque} {phones.modèle}
            </h2>
            <p>Ram: {phones.ram}</p>
            <p>Stockage: {phones.stockage}</p>
            <p>Indice Antutu: {phones.indiceAntutu}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
