import React from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let  arrayFavs = JSON.parse(localStorage.getItem('arrayFav'))

  const desplegarFavs = (arrayFavs) => {
    if (arrayFavs !== null) {
      return arrayFavs.map((odont) => 
          <Card datosOdontProps={odont}/>
        )
    }
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {desplegarFavs(arrayFavs)}
      </div>
    </>
  );
};

export default Favs;
