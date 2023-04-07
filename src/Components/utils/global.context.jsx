import { useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";

//------------Uso del Reducer para generar favoritos----------

const initialFavState = JSON.parse(localStorage.getItem('arrayFav')) || []
const favReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_FAV':
      localStorage.setItem('arrayFav', JSON.stringify([...state, action.payload]))
      return [...state, action.payload]            //recordar retornar la actualizacion del State, de lo contrario no quedaria grabado el State con cada nuevo favorito
    default:
      throw new Error  
  }
} 

//------------------------FIN del Reducer ----------------------

const ContextGlobal = createContext();              //lo creo con mayuscula porque este despues sera una especie de etiqueta

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [odontologos, setOdontologos] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users/"
  useEffect(() => {
    fetch(url)                                      
    .then(res => res.json())    
    .then(data => setOdontologos(data)) 
    ;
  }, [])

  //------------Uso del Reducer para generar favoritos----------
  
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

 //------------------------FIN del Reducer ----------------------

  const [theme, setTheme] = useState("")


  return (
    <ContextGlobal.Provider value={{url, odontologos, setOdontologos, theme, setTheme, favState, favDispatch}}>           
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context                          //para este caso meto el context en el index para que quede en toda la app pero se puede usar en cualquier lado

export const useOdontologiaStates = () => useContext(ContextGlobal)
