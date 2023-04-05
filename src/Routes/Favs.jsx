import React from "react";
import Card from "../Components/Card";
//import { useOdontologiaStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  //const {favoritos, setFavoritos} = useOdontologiaStates()        // borrar si hago el map con el state esta bien, pero con el localStorage esta atrasado
  const arrayFavs = JSON.parse(localStorage.getItem('arrayFav'))
  console.log(arrayFavs);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {arrayFavs.map((odont) => 
          <Card datosOdontProps={odont}/>
        )}
      </div>
    </>
  );
};

export default Favs;
