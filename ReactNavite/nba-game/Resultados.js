import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Resultados({ route }) {

  const {
    equipoIz,
    equipoDe,
    contadorEquipoLocal,
    contadorEquipoVisitante,
  } = route.params || {};

  // Decide qué se muestra
  function determinarResultado() {
    if (contadorEquipoLocal > contadorEquipoVisitante) {
      return mostrarGanador(equipoIz, contadorEquipoLocal);
    } 
    if (contadorEquipoVisitante > contadorEquipoLocal) {
      return mostrarGanador(equipoDe, contadorEquipoVisitante);
    }
    return mostrarEmpate();
  }

  // Muestra un solo ganador
  function mostrarGanador(equipo, puntos) {
    return (
      <View style={styles.resultadoBox}>
        <Text style={styles.winner}>WINNER</Text>
        <Image source={{ uri: equipo.logo_url }} style={styles.logo} />
        <Text style={styles.nombre}>{equipo.name}</Text>
        <Text style={styles.puntos}>{puntos} pts</Text>
      </View>
    );
  }

  // Muestra empate
  function mostrarEmpate() {
    return (
      <View style={styles.resultadoBox}>
        <Text style={styles.winner}>EMPATE</Text>

        <View style={styles.empateEquipos}>
          <View style={styles.equipoEmpate}>
            <Image source={{ uri: equipoIz.logo_url }} style={styles.logo} />
            <Text style={styles.nombre}>{equipoIz.name}</Text>
            <Text style={styles.puntos}>{contadorEquipoLocal} pts</Text>
          </View>

          <View style={styles.equipoEmpate}>
            <Image source={{ uri: equipoDe.logo_url }} style={styles.logo} />
            <Text style={styles.nombre}>{equipoDe.name}</Text>
            <Text style={styles.puntos}>{contadorEquipoVisitante} pts</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Resultado Final</Text>
      {determinarResultado()}
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  resultadoBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    padding: 20,
    borderRadius: 10,
  },

  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  logo: {
    width: 120,
    height: 90,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  puntos: {
    fontSize: 16,
    marginTop: 5,
  },

  empateEquipos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  equipoEmpate: {
    alignItems: 'center',
    width: '45%',
  },
});
