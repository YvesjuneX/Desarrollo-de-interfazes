
// Hay que importar la funcion de la siguiente manera por que jest no entiende import normal
const { calcularNuevoMarcador } = require('./reglas');

test('Escenario A: si tengo 10 puntos y anoto 2, el resultado debe ser 12', () => {
    // 1. PREPARACIÓN (Arrange)
    const puntajeActual = 10;
    const puntos = 2;

    // 2. EJECUCIÓN (Act)
    const resultado = calcularNuevoMarcador(puntajeActual, puntos);

    // 3. AFIRMACIÓN (Assert)
    expect(resultado).toBe(12);
});

test('Escenario B: si tengo 10 puntos y anoto un triple(3), el resultado debe ser 13', () => {
  expect(calcularNuevoMarcador(10, 3)).toBe(13);
});