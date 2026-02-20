
const calcularNuevoMarcador = (puntajeActual, puntosASumar) => {
  return puntajeActual + puntosASumar;
};
// Hay que exportarlo de la siguiente manera por que jest no entiende el export normal
module.exports = { calcularNuevoMarcador };