import './App.css';

export default function Boton({ onClick }) {
  return (
    <button className="btn-cargar" onClick={onClick}>
      Mostrar usuarios
    </button>
  );
}
