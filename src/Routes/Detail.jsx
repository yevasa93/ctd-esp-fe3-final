import React from 'react'
import { useState, useEffect } from 'react'
import { useOdontologiaStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {url} = useOdontologiaStates()
  const [odontSelec, setOdontSelec] = useState({})
  const params = useParams()                                        //aqui estoy tomando los parametros del padre que seria home

  useEffect(() => {
    fetch(url+params.id)                                      
    .then(res => res.json())    
    .then(data => setOdontSelec(data)) 
    ;
  })

  return (
    <div className='section'>
      <h1>Detail Dentist {odontSelec.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <img src="./images/doctor.jpg" alt='doctor' />
      <h3>{odontSelec.name} </h3>
      <h3>Email: {odontSelec.email}</h3>
      <h3>Phone: {odontSelec.phone}</h3>
      <h3>{odontSelec.website}</h3>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail