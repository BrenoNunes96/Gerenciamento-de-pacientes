import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home';
import Listados from "../pages/Listados";
import Editar from '../pages/Editar';
import inteligencia from'../components/inteligencia';
import Lista from "../components/Lista";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Listados" component={Listados} />
      <Stack.Screen name= 'Editar' component={Editar}/>
     <Stack.Screen name= 'inteligencia' component={inteligencia}/>
     <Stack.Screen name='lista' component={Lista} />

     
    </Stack.Navigator>
  );
}
