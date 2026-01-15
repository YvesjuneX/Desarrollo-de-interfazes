import { View, Text, Button, StyleSheet } from 'react-native';
export default function Partido({ navigation }) {
  return (
    <View>
      <Text>Estamos en el seleccion</Text>
      <Button 
        title="Ir a seleccion"
        // El nombre debe coincidir EXACTAMENTE con el name="" del Stack.Screen
        onPress={() => navigation.navigate('Seleccion')}
      />
    </View>
  );
}