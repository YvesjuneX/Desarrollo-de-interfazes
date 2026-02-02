import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useState } from 'react';
export default function Partido({ route,navigation }) {

  const { equipoIz, equipoDe } = route.params || {};
  const [contadorEquipoLocal, setContadorEquLoc] = useState(0);
  const [contadorEquipoVisitante, setContadorEquiVis] = useState(0);
  const [puntosLocal, setPuntosLocal] = useState({});
  const [puntosVisitante, setPuntosVisitante] = useState({});
  function anotarPunto(puntos,jugador,equipo) {
    if(equipo==1){
      setContadorEquLoc(contadorEquipoLocal+puntos)
      setPuntosLocal(prev => {
        const copia = { ...prev };

        if (copia[jugador] !== undefined) {
          copia[jugador] += puntos;
        } else {
          copia[jugador] = puntos;
        }

        return copia;
    });
    }else {
      setContadorEquiVis(contadorEquipoVisitante+puntos)
      setPuntosVisitante(prev => {
        const copia = { ...prev };

        if (copia[jugador] !== undefined) {
          copia[jugador] += puntos;
        } else {
          copia[jugador] = puntos;
        }

        return copia;
    });
    }

  };

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
          <Text style={styles.contador}>{contadorEquipoLocal}</Text>
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
          <Text style={styles.contador}>{contadorEquipoVisitante}</Text>
        </View>

      </View>

      {/* JUGADORES */}
      <View style={styles.equiposContenedor}>
        {/* JUGADORES EQUIPO LOCAL */}
        <View style={styles.columna}>
          {equipoIz.top_players.map((jugador, index) => (
            <View key={index} style={styles.jugadorFila}>
              <Text style={styles.nombreJugador}>• {jugador}</Text>

              <View style={styles.botonesPuntos}>
                <Button title="2 PT" onPress={() => anotarPunto(2,jugador,1)} />
                <Button title="3 PT" onPress={() => anotarPunto(3,jugador,1)} />
              </View>
            </View>
          ))}
        </View>

        {/* JUGADORES EQUIPO VISITANTE */}
        <View style={styles.columna}>
          {equipoDe.top_players.map((jugador, index) => (
            <View key={index} style={styles.jugadorFila}>
              <Text style={styles.nombreJugador}>• {jugador}</Text>

              <View style={styles.botonesPuntos}>
                <Button title="2 PT" onPress={() => anotarPunto(2,jugador,2)} />
                <Button title="3 PT" onPress={() => anotarPunto(3,jugador,2)} />
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.finalizarContainer}>
        <Button
          title="Fin del juego"
          onPress={() => navigation.navigate('Resultados',{
            equipoIz: equipoIz,
            equipoDe: equipoDe,
            contadorEquipoLocal: contadorEquipoLocal,
            contadorEquipoVisitante: contadorEquipoVisitante,
            puntosLocal: puntosLocal,
            puntosVisitante: puntosVisitante,
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
},
jugadorFila: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 10,
},

nombreJugador: {
  flex: 1,
  fontSize: 14,
},

botonesPuntos: {
  flexDirection: 'row',
  gap: 6,
},
finalizarContainer: {
  marginTop: 30,
  alignItems: 'center',
}
});
