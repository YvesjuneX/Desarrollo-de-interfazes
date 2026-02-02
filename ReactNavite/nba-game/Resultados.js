import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Resultados({ route }) {

  const {
    equipoIz,
    equipoDe,
    contadorEquipoLocal,
    contadorEquipoVisitante,
  } = route.params || {};

  function determinarResultado() {
    if (contadorEquipoLocal > contadorEquipoVisitante) {
      return mostrarGanador(equipoIz, contadorEquipoLocal, 'EQUIPO LOCAL');
    }
    if (contadorEquipoVisitante > contadorEquipoLocal) {
      return mostrarGanador(equipoDe, contadorEquipoVisitante, 'EQUIPO VISITANTE');
    }
    return mostrarEmpate();
  }

  function mostrarGanador(equipo, puntos, tipoEquipo) {
    return (
      <View style={styles.resultado}>
        <Text style={styles.winner}>WINNER</Text>

        <Image
          source={{ uri: equipo.logo_url }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.nombre}>{equipo.name}</Text>
        <Text style={styles.tipoEquipo}>{tipoEquipo}</Text>

        <Text style={styles.contador}>{puntos}</Text>
      </View>
    );
  }

  function mostrarEmpate() {
    return (
      <View style={styles.resultado}>
        <Text style={styles.winner}>EMPATE</Text>

        <View style={styles.empateEquipos}>
          <View style={styles.equipoEmpate}>
            <Image
              source={{ uri: equipoIz.logo_url }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.nombre}>{equipoIz.name}</Text>
            <Text style={styles.tipoEquipo}>EQUIPO LOCAL</Text>
            <Text style={styles.contador}>{contadorEquipoLocal}</Text>
          </View>

          <View style={styles.equipoEmpate}>
            <Image
              source={{ uri: equipoDe.logo_url }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.nombre}>{equipoDe.name}</Text>
            <Text style={styles.tipoEquipo}>EQUIPO VISITANTE</Text>
            <Text style={styles.contador}>{contadorEquipoVisitante}</Text>
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

  resultado: {
    alignItems: 'center',
  },

  winner: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  tipoEquipo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },

  contador: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#111',
    marginHorizontal: 15,
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
