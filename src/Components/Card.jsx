import React from "react";
import { Link } from 'react-router-dom'
import { useOdontologiaStates } from '../Components/utils/global.context'

const Card = ({datosOdontProps}) => {

  //implementacion del Reducer para generar favoritos
  const {favDispatch} = useOdontologiaStates()

  const addFavReducer = () => {
    favDispatch({type: 'ADD_FAV', payload: datosOdontProps})
  }

  // esta es la logica para el Modo Oscuro y que sea afectado tambien dentor de la Card
  const {theme} = useOdontologiaStates()
  let appClassName = "card "+theme


  return (
    <div className={appClassName}>
      <Link key={datosOdontProps.id} to={'/dentist/' + datosOdontProps.id}> 
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="imagen odontologo" className="imgDoc"/>
        <h3>{datosOdontProps.name}</h3>
        <p>username: {datosOdontProps.username}</p>
        <p>id: {datosOdontProps.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFavReducer} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
