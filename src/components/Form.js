import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Formulario from './Formulario';
export default function Form() {
  const navigation = useNavigation(); // <-- você precisa usar isso para a navegação funcionar

  function foi() {
    navigation.navigate('inteligencia');
  }

  






  return (
    <View style={styles.container}>

<Formulario  />

  <Button title="vai para inteligência" onPress={foi} />






  </View>



    
  
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  resposta: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});
