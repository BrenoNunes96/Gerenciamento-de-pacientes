import React from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import Lista from '../components/Lista'
export default function Listados(){

return(
<ScrollView>
    <View>
        <Text style={styles.titulo}>Pacientes cadastrados</Text>
        <Lista/>
    </View>




</ScrollView>


)








}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 26,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});