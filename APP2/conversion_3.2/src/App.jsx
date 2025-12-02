import './App.css'
import { Descripcion, BarraDeProgreso, ListaDeCasillas, Buscador, Emojis, Reproductor } from "./componentes";
export default function App() {
  return (
    <>
      <div className='contenedor-principal'>
        <Descripcion />
        <BarraDeProgreso />
        <Reproductor />
        <ListaDeCasillas />
        <Buscador />
        <Emojis />
        <div className="navegacion-border"></div>
        <div className='navegacion'>
          <div>
            🏠
          </div>
          <div>
            ⬜
          </div>
          <div>
            ☰
          </div>
        </div>
      </div>
    </>
  );
}


