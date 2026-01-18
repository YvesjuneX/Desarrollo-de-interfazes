import { View, Text, StyleSheet, Image } from 'react-native';

export default function Partido({ route, navigation }) {

  const { equipoIz, equipoDe } = route.params || {};
  return (
    <View style={styles.contenedorPrincipal}>

      <View style={styles.equiposContenedor}>

        {/* Equipo Izquierdo */}
        <View style={styles.columna}>
          <Image
            source={{ uri: equipoIz.logo_url }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.nombreEquipo}>{equipoIz.name}</Text>

          <View style={styles.listaJugadores}>
            {equipoIz.top_players.map((jugador, index) => (
              <Text key={index}>• {jugador}</Text>
            ))}
          </View>
        </View>

        {/* Equipo Derecho */}
        <View style={styles.columna}>
          <Image
            source={{ uri: equipoDe.logo_url }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.nombreEquipo}>{equipoDe.name}</Text>

          <View style={styles.listaJugadores}>
            {equipoDe.top_players.map((jugador, index) => (
              <Text key={index}>• {jugador}</Text>
            ))}
          </View>
        </View>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  equiposContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  columna: {
    width: '45%',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 110,
    marginBottom: 10,
  },
  nombreEquipo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listaJugadores: {
    marginTop: 15,
  },
});
