import './App.css'
{/*Importamos los todos los modulos del fichero componentes*/}
import { Descripcion, BarraDeProgreso, ListaDeCasillas, Buscador, Emojis, Reproductor } from "./componentes";
export default function App({ casa = "🏠",menu="⬜",mas="☰" }) {
  return (
    <>
      <div className='contenedor-principal'>
        {/*Llamamos a los modulos que importamos*/}
        <Descripcion />
        <BarraDeProgreso />
        <Reproductor />
        <ListaDeCasillas />
        <Buscador />
        <Emojis mascarilla="😷" feliz2="😄" vaquero="🤠" diablo="👿" robot="🤖"/>
        <div className="navegacion-border"></div>
        <div className='navegacion'>
          <div>
            {casa}
          </div>
          <div>
            {menu}
          </div>
          <div>
            {mas}
          </div>
        </div>
      </div>
    </>
  );
}


