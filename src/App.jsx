
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

import { useOdontologiaStates } from './Components/utils/global.context'


function App() {
  const {theme} = useOdontologiaStates()
  let appClassName = "App "+theme

  return (
    <div className={appClassName}>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>       {/*los 2 puntos es porque es un parametro que se va a editar*/}
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
