import { View, Text, StyleSheet, Image } from 'react-native';

export default function Partido({ route }) {

  const { equipoIz, equipoDe } = route.params || {};

  return (
    <View style={styles.contenedorPrincipal}>

      {/* MARCADOR */}
      <View style={styles.marcador}>

        <View style={styles.equipoMarcador}>
          <Image
            source={{ uri: equipoIz.logo_url }}
            style={styles.logoMarcador}
            resizeMode="contain"
          />
          <Text style={styles.nombreMarcador}>{equipoIz.name}</Text>
          <Text style={styles.titulo}>EQUIPO LOCAL</Text>
          <Text style={styles.contador}>0</Text>
        </View>

        <Text style={styles.vs}>VS</Text>

        <View style={styles.equipoMarcador}>
          <Image
            source={{ uri: equipoDe.logo_url }}
            style={styles.logoMarcador}
            resizeMode="contain"
          />
          <Text style={styles.nombreMarcador}>{equipoDe.name}</Text>
          <Text style={styles.titulo}>EQUIPO VISITANTE</Text>
          <Text style={styles.contador}>0</Text>
        </View>

      </View>

      {/* JUGADORES */}
      <View style={styles.equiposContenedor}>

        <View style={styles.columna}>
          <Text style={styles.tituloJugadores}>Jugadores</Text>
          {equipoIz.top_players.map((jugador, index) => (
            <Text key={index}>• {jugador}</Text>
          ))}
        </View>

        <View style={styles.columna}>
          <Text style={styles.tituloJugadores}>Jugadores</Text>
          {equipoDe.top_players.map((jugador, index) => (
            <Text key={index}>• {jugador}</Text>
          ))}
        </View>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },

  marcador: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 2, 
    borderColor: '#413d3d',
    marginHorizontal: 15,
    
  },

  equipoMarcador: {
    alignItems: 'center',
    width: '40%',
  },

  logoMarcador: {
    width: 120,
    height: 100,
    marginBottom: 8,
  },

  nombreMarcador: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  vs: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },

  equiposContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },

  columna: {
    width: '45%',
    alignItems: 'center',
  },

  tituloJugadores: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
   titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  contador: {
  fontSize: 48,
  fontWeight: 'bold',
  color: '#111',
  marginHorizontal: 15,
}
});
