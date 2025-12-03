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
    {/*David bisbal*/}
    {/*https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2023-11-16_Gala_de_los_Latin_Grammy%2C_12_%28cropped%29.jpg/250px-2023-11-16_Gala_de_los_Latin_Grammy%2C_12_%28cropped%29.jpg*/}
    {/*Todo es posible en navidad*/}
      <h2 className="titulo-seccion">David bisbal</h2>
      <h2 className="subtitulo">Todo es posible en navidad</h2>
      <div className="border"></div>
      {/*Contenedor con la imagen de Alejandro Sanz y descripcion*/}
      <div className="descripcion">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2023-11-16_Gala_de_los_Latin_Grammy%2C_12_%28cropped%29.jpg/250px-2023-11-16_Gala_de_los_Latin_Grammy%2C_12_%28cropped%29.jpg"
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
export function Emojis({ mascarilla,feliz2,vaquero,diablo,robot }) {
  return (
    <div className='emojis'>
      <div className='emoji-gris'>
        {mascarilla}
      </div>
      <div className='emoji-gris'>
        {feliz2}
      </div>
      <div className='emoji-central'>
        {vaquero}
      </div>
      <div className='emoji-gris'>
        {diablo}
      </div>
      <div className='emoji-gris'>
        {robot}
      </div>
    </div>
  );
}