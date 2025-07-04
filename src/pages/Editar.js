import { useNavigation } from '@react-navigation/native';

import React from "react";
import { View,Text,TextInput,Button,StyleSheet, TouchableOpacity} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import Feather from 'react-native-vector-icons/Feather'

import Lista from "../components/Lista";
import {useRoute} from '@react-navigation/native'
import Formulario from '../components/Formulario'
export default function Editar (){

const route = useRoute();
const {element} =route.params;
return (
<Formulario dados={element} buttonName={"Cadastro triagem"} pagina={'editar'}/>


)
}
