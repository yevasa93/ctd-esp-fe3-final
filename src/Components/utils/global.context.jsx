import { createContext, useContext, useState, useEffect } from "react";

const ContextGlobal = createContext();              //lo creo con mayuscula porque este despues sera una especie de etiqueta

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [odontologos, setOdontologos] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users/"
  useEffect(() => {
    fetch(url)                                      
    .then(res => res.json())    
    .then(data => setOdontologos(data)) 
    ;
  }, [])

  //del momento se usa con variables y no se necesito state se puede borrar o e usa luego con un reducer
  const [favoritos, setFavoritos] = useState([])


  const [theme, setTheme] = useState("")






  return (
    <ContextGlobal.Provider value={{url, odontologos, setOdontologos, favoritos, setFavoritos, theme, setTheme}}>           
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context                          //para este caso meto el context en el index para que quede en toda la app pero se puede usar en cualquier lado

export const useOdontologiaStates = () => useContext(ContextGlobal)
