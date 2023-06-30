import React, { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
// import { useParams } from "react-router-dom";

function SearchPage() {
  const [phones, setPhones] = useState([]);
  // const { id } = useParams();
  useEffect(() => {
    const fakePhoneInfo = {
      marque: "Samsung",
      modèle: "Galaxy S20",
      ram: "8 Go",
      stockage: "128 Go",
      indiceAntutu: "300000",
    };

    setPhones(fakePhoneInfo);
    // fetch(
    //   `${
    //     import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"
    //   }/smartphones/${id}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     constole.log(data);
    //   });
  }, []);

  return (
    <div className="screen">
      <LeftMenu />
      <div className="main-menu">
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
    </div>
  );
}

export default SearchPage;
