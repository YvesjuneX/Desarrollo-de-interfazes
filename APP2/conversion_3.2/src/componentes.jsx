export function Reproductor() {
  return (
    <div className="reproductor">
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
  );
}
export function Descripcion() {
  return (
    <>
      <h2 className="titulo-seccion">Alejandro Sanz</h2>
      <h2 className="subtitulo">- Más -</h2>
      <div className="border"></div>
      {/*Contenedor con la imagen de Alejandro Sanz y descripcion*/}
      <div className="descripcion">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/spanish-singer-alejandro-sanz-arrives-for-univisions-37th-news-photo-1759743852.pjpeg?crop=0.636xw:0.425xh;0.138xw,0.0656xh&resize=640:*"
          alt="Foto de alejandro sanz"
          className="foto"
        />
        <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit dis hac,
          eros senectus luctus ante nullam risus aliquet cursus, dictum urna torquent pharetra
          nec volutpat orci litora. Nam suspendisse vestibulum sem varius facilisis aliquet
        </p>
      </div>
    </>
  );
}
export function BarraDeProgreso() {
  return (
    <div className="progress-ba">
      <div className="cuadrado">
        ⏹️
      </div>
      <progress className="progress-bar" max="100" value="40"></progress>
      <div className="cuadrado">
        🔊
      </div>
    </div>
  );
}
export function ListaDeCasillas() {
  return (
    <div className="checkboxes-container">
      {/* Columna izquierda */}
      <div className="checkbox-column">
        <label className="checkbox-item">
          <input type="checkbox" disabled />
          not selected
        </label>
        <label className="checkbox-item">
          <input type="checkbox" checked="false" />
          selected
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          indeterminate
        </label>
      </div>
      {/* Columna derecha */}
      <div className="checkbox-column">
        <label className="checkbox-item">
          <input type="checkbox" disabled />
          not selected
        </label>
        <label className="checkbox-item">
          <input type="checkbox" checked="false" />
          selected
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          indeterminate
        </label>
      </div>
    </div>
  );
}
export function Buscador() {
  return (
    <div className='buscador'>
      Alejandro Sanz
    </div>
  );
}
export function Emojis() {
  return (
    <div className='emojis'>
      <div className='emoji-gris'>
        😷
      </div>
      <div className='emoji-gris'>
        😄
      </div>
      <div className='emoji-central'>
        🤠
      </div>
      <div className='emoji-gris'>
        👿
      </div>
      <div className='emoji-gris'>
        🤖
      </div>
    </div>
  );
}