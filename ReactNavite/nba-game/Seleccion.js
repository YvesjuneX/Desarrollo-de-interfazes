import React, { useState } from 'react';
import Equipos from './Equipos.json';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Seleccion({ navigation }) {
  
  const [numEquipoIzq, setnumEquipoIzq] = useState(0);
  const [numEquipoDer, setnumEquipoDer] = useState(1);
  const equipoIzq = Equipos[numEquipoIzq];
  const equipoDer = Equipos[numEquipoDer];
  function cambiarEquipo(equipo) {
    if(equipo==0){
      if (numEquipoIzq==5){
        setnumEquipoIzq(0)
      }else{
        setnumEquipoIzq(numEquipoIzq+1)
      }
    }else {
      if (numEquipoDer==5){
        setnumEquipoDer(0)
      }else{
        setnumEquipoDer(numEquipoDer+1)
      }
    }
   

  };
  return (
     <View style={styles.contenedorPrincipal}>

      <View style={styles.equiposContenedor}>

        {/* Equipo Izquierdo */}
        <View style={styles.columna}>
          <Image
            source={{ uri:  equipoIzq.logo_url }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.nombreEquipo}>{equipoIzq.name}</Text>
          <Button title="Cambiar" onPress={() => cambiarEquipo(0)} />

          <View style={styles.listaJugadores}>
            {equipoIzq.top_players.map((jugador,index) => (
              <Text key={index}>• {jugador}</Text>
            ))}
          </View>
        </View>

        {/* Equipo Derecho */}
        <View style={styles.columna}>
          <Image
            source={{ uri: equipoDer.logo_url }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.nombreEquipo}>{equipoDer.name}</Text>
          <Button title="Cambiar" onPress={() => cambiarEquipo(1)} />
          <View style={styles.listaJugadores}>
            {equipoDer.top_players.map((jugador,index) => (
              <Text key={index}>• {jugador}</Text>
            ))}
          </View>
        </View>

      </View>

      <View style={styles.partido}>
        <Button
          title="IR A PARTIDO"
          onPress={() => navigation.navigate('Partido',{
            equipoIz: equipoIzq,
            equipoDe: equipoDer,
          })}
        />
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
    flexDirection: 'row', // Esto pone uno al lado del otro
    justifyContent: 'space-around',
    width: '100%',
  },
  columna: {
    width: '45%',
    alignItems: 'center', // Centra los elementos dentro de la columna
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
  partido: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
});
