import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
    <div className='contenedor-principal'>
     <h2 className="titulo-seccion">Alejandro Sanz</h2>
      <h2 className="titulo-seccion">- Más -</h2>
   


      {/*Contenedor con la imagen de Alejandro Sanz y descripcion*/}
      <div className="seccion">
        <img 
          src="https://hips.hearstapps.com/hmg-prod/images/spanish-singer-alejandro-sanz-arrives-for-univisions-37th-news-photo-1759743852.pjpeg?crop=0.636xw:0.425xh;0.138xw,0.0656xh&resize=640:*" 
          alt="Mi foto" 
          className="foto-perfil"
        />
        <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit dis hac,
           eros senectus luctus ante nullam risus aliquet cursus, dictum urna torquent pharetra 
           nec volutpat orci litora. Nam suspendisse vestibulum sem varius facilisis aliquet 
           porta platea nullam ad, non ligula et magna arcu parturient velit sed phasellus, 
        </p>
      </div>
      <div className="seccion">
        <div className="cuadrado">
          ⏹️
        </div>
        <progress className="progress-bar" max="100" value="40"></progress>
        <div className="cuadrado">
          🔊
        </div>
      </div>
      <div className="seccion">
         <audio></audio>
          <input type="range" min="0" max="1" step="0.1" value="0,5"></input>
        <div className="cuadrado">
          ⏮️
        </div>
        <div className="cuadrado">
          ▶️
        </div>
        <div className="cuadrado">
          ⏭️
        </div>
        <div className="cuadrado-invi">
          🔊
        </div>
      </div>
      <div className='Checked-box'>
        <div>
          <input type="checkbox" checked="false"></input>
          <input type="checkbox"></input>
        </div>
        <div>

        </div>
      </div>
      

      {/* Habilidades */}
      <div className="seccion">
        <h2 className="titulo-seccion">Habilidades</h2>
        <div className="lista-habilidades">
          <div className="habilidad">HTML</div>
          <div className="habilidad">CSS</div>
          <div className="habilidad">JavaScript</div>
          <div className="habilidad">Python</div>
          <div className="habilidad">Java</div>
          <div className="habilidad">PHP</div>
          <div className="habilidad">Bash</div>
        </div>
      </div>

      {/* Experiencia */}
      <div className="seccion">
        <h2 className="titulo-seccion">Experiencia</h2>
        
        <div className="item-experiencia">
          <h3>Atencion al cliente</h3>
          <p className="empresa">Correos Express</p>
          <p className="periodo">2024</p>
          <p className='text'>Atención al cliente presencial y llamadas a clientes para coordinación de entregas, gestión de devoluciones y confirmacion de entregas.</p>
        </div>

        <div className="item-experiencia">
          <h3>Desarrollador fullstack</h3>
          <p className="empresa">SGE para comunidades de regantes</p>
          <p className="periodo">2025</p>
          <p className='text'>
            Desarrollo fullstack de un SGE
            para comunidades de regantes junto a un compañero usando PHP, HTML, JavaScript y MySQL .</p>
        </div>
      </div>

      {/* Educación */}
      <div className="seccion">
        <h2 className="titulo-seccion">Educación</h2>
        
        <div className="item-experiencia">
          <h3>Desarrollo de apliaciones multiplataformas</h3>
          <p className="empresa">CPIFP Los enlaces</p>
          <p className="periodo">2024 - 2026</p>
        </div>
        <div className="item-experiencia">
          <h3>Sistemas microinformaticos y redes</h3>
          <p className="empresa">CPIFP Los enlaces</p>
          <p className="periodo">2021 - 2023</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
