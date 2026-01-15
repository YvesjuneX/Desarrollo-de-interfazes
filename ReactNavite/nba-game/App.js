
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Partido from './Partido'
import Seleccion from './Seleccion'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      {/* initialRouteName define qué pantalla se ve primero */}
      <Stack.Navigator initialRouteName="Seleccion">
        
        {/* Cada <Stack.Screen> es una ruta válida */}
        <Stack.Screen 
          name="Seleccion" 
          component={Seleccion} 
          options={{ title: 'Seleccion prueba' }} 
        />
        
        <Stack.Screen name="Partido" component={Partido} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
