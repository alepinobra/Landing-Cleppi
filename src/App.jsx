import Bajo from "./components/Bajo";
import Blog from "./components/Blog";
import Caracteristicas_principales from "./components/Caracteristicas_principales";
import Contacto from "./components/Contacto";
import Cuerpo from "./components/Cuerpo";
import Funciona from "./components/Funciona";
import Header from "./components/Header";

function App() {  
  return (
    <div>
        <Header/>
        <Cuerpo/>
        <Caracteristicas_principales/>
        <Funciona/>
        <Blog/>
        <Contacto/>
        <Bajo/>
    </div>
  )
}

export default App;

