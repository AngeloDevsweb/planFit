import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Abs from './screens/Abs';
import Pecho from './screens/Pecho';
import Brazos from './screens/Brazos';
import Pierna from './screens/Pierna';
import Espalda from './screens/Espalda';
import Contacto from './screens/Contact';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "EJERCICIOS EN CASA",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name="abs"
        component={Abs}
        options={{
          title: "ABS",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pecho"
        component={Pecho}
        options={{
          title: "PECHO",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="brazos"
        component={Brazos}
        options={{
          title: "BRAZOS",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pierna"
        component={Pierna}
        options={{
          title: "PIERNAS",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="hombroEspalda"
        component={Espalda}
        options={{
          title: "HOMBROS Y ESPALDA",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen name='contacto' component={Contacto} options={{
        title: "CONTACTO",
        headerStyle: { backgroundColor: "#0F2027" },
        headerTintColor: "white",
      }} />
      
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <MyStack/>
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
