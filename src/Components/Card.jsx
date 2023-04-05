import React from "react";
import { Link } from 'react-router-dom'
import { useOdontologiaStates } from '../Components/utils/global.context'

const Card = ({datosOdontProps}) => {
  //const {favoritos, setFavoritos} = useOdontologiaStates()      // borrar con el state va bien pero en localStorage se atrasa en 1

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    let arrayFav = localStorage.getItem('arrayFav')
    console.log(arrayFav);
    console.log('aqui se agrego a favoritos');

    if (arrayFav) {
      let parsedFavs = JSON.parse(arrayFav)
      arrayFav = [...parsedFavs, datosOdontProps]
    } else{
      arrayFav = [datosOdontProps]
    }
    localStorage.setItem('arrayFav', JSON.stringify(arrayFav))          
    
    console.log(arrayFav);                  //se puede borrar este console.log

  }

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
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
