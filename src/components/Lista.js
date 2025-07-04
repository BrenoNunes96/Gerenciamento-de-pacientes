import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { excluirPaciente, listarPacientes } from '../data/Data'; // Certifique que esses existem

import { useNavigation } from "@react-navigation/native";
export default function Lista() {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pacientes = await listarPacientes();
      setListas(pacientes);
    };

    fetchData();
  }, []);

  const handleDelete = (y) => {
    excluirPaciente(y);
    setListas(listas.filter((x) => x.key !== y));
  };
const navigation = useNavigation();

function navegaEditar(element){

navigation.navigate('Editar',{element})


}



  return (
    <View>
      {listas.map((element) => (
        <View style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor:'green' }} key={element.key}>
          <Text>Nome: {element.name}</Text>
          <Text>Idade: {element.idade}</Text>
          <Text>Telefone: {element.telefone}</Text>
          <Text>Gênero: {element.sexo}</Text>
          <Text>Sintomas: {element.sintomas}</Text>


          <TouchableOpacity  style={styles.botao}onPress={() => handleDelete(element.key)}>
            <Text style={styles.texto}>Excluir</Text>
          </TouchableOpacity>
 <View> 

<TouchableOpacity  style={styles.ButtonEditar}    onPress= {()=> navegaEditar(element)}>

    <Text style={styles.texto} >
    Editar</Text>
</TouchableOpacity>
  
  </View>

          
        </View>
      ))}
    </View>
  );

}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoInfo: {
    fontSize: 15,
    color: '#212529',
    marginBottom: 4,
  },
  texto: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  botao: {
    backgroundColor: '#198754',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  ButtonEditar: {
    backgroundColor: '#fd7e14',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
});
