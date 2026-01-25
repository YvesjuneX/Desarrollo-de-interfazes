
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
          options={{ title: 'Seleccion' }} 
        />
        
        <Stack.Screen name="Partido" component={Partido} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


