import './App.css'

function App() {
  

  return (
    <>
    {/* Header */}
    <div className='contenedor-principal'>
      <div className="header">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQEC_BTKCwtA3g/profile-displayphoto-scale_200_200/B4DZqW4mRcIgAY-/0/1763468011577?e=1764806400&v=beta&t=Bxdn-t_9q-YGZJfyS3XDKuA6I2vbOX6NSO_RIr4k2jw" 
          alt="Mi foto" 
          className="foto-perfil"
        />
        <h1>Juan Sebastian Leal Garzon</h1>
        <h2>Desarrollador Backend</h2>
        <p>📧 juanleal132005@gmail.com | 📱 643561139 | 📍 Zaragoza</p>
      </div>

      {/* Sobre Mí */}
      <div className="seccion">
        <h2 className="titulo-seccion">Sobre Mí</h2>
        <p className="text">Soy desarrollador backend con experiencia en PHP, Java y Python. He creado un Sistema de Gestión Empresarial (SGE) 
          para comunidades de regantes, digitalizando procesos y automatizando tareas administrativas. Actualmente estudio el Grado Superior de 
          Desarrollo de Aplicaciones Multiplataforma en el CPIFP Los Enlaces, mientras me formo en ciberseguridad para especializarme como pentester.</p>
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
