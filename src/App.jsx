import Bajo from "./components/Bajo";
import Blog from "./components/Blog";
import Caracteristicas_principales from "./components/Caracteristicas_principales";
import Contacto from "./components/Contacto";
import Cuerpo from "./components/Cuerpo";
import Funciona from "./components/Funciona";
import Header from "./components/Header";
import {Helmet} from "react-helmet";


function App() {  
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Cleppi</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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

