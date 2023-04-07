import React from 'react'
import Card from '../Components/Card'
import { useOdontologiaStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {odontologos} = useOdontologiaStates()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {odontologos.map((odont) => 
         // el link lo genero dentro del componente card para no envolverlo todo en link sino que el boton de favoritos no me lleve al detalle
          <Card datosOdontProps={odont}/>
        )}
      </div>
    </main>
  )
}

export default Home