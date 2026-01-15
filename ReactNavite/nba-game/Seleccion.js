import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Seleccion({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Contenedor de los dos equipos */}
      <View style={styles.rivalesContainer}>
        
        {/* Equipo 1 (Izquierda) */}
        <View style={styles.columna}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.logo} 
          />
          <Text style={styles.nombreEquipo}>Bulls</Text>
          <Button title="Cambiar" onPress={() => {}} />
          <View style={styles.listaJugadores}>
            <Text>• Jordan</Text>
            <Text>• Pippen</Text>
            <Text>• Rodman</Text>
          </View>
        </View>

        {/* Equipo 2 (Derecha) */}
        <View style={styles.columna}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.logo} 
          />
          <Text style={styles.nombreEquipo}>Lakers</Text>
          <Button title="Cambiar" onPress={() => {}} />
          <View style={styles.listaJugadores}>
            <Text>• Magic J.</Text>
            <Text>• Kareem</Text>
            <Text>• Worthy</Text>
          </View>
        </View>

      </View>

      {/* Botón Central para navegar */}
      <View style={styles.botonCentral}>
        <Button 
          title="IR A PARTIDO" 
          onPress={() => navigation.navigate('Partido')} 
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  rivalesContainer: {
    flexDirection: 'row', // Esto pone uno al lado del otro
    justifyContent: 'space-around',
    width: '100%',
  },
  columna: {
    width: '45%',
    alignItems: 'center', // Centra los elementos dentro de la columna
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  nombreEquipo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listaJugadores: {
    marginTop: 15,
  },
  botonCentral: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
});