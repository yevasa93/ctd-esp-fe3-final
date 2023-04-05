import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useOdontologiaStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate()

  const {theme, setTheme} = useOdontologiaStates()
  const handleChangeTheme = () => {
    theme==="" ? setTheme('dark') : setTheme('')
  }
  

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)}>↩</button>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      <Link to='/favs'><h3>Favoritos</h3></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar