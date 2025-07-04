import { useNavigation} from '@react-navigation/native';
import {useState} from 'react'
import { editarPaciente } from '../data/Data';
import React from "react";
import { View,Text,TextInput,Button,StyleSheet, TouchableOpacity} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import Feather from 'react-native-vector-icons/Feather'
import { adicionarPaciente } from "../data/Data";
export default function  Formulario ({pagina,buttonName,dados}){

const [name, setName] = useState(dados?.name||'');
const [idade, setIdade] =useState(dados?.idade|| '');
const [telefone,setTelefone] =useState(dados?.telefone||'');
const [sintomas,setSintomas] =useState(dados?.sintomas||'');
const [sexo,setSexo] = useState (dados?.sexo||'')

const navigation = useNavigation()

const data = {
name,
idade,
telefone,
sexo,
sintomas

}

function enviarFormulario(){

if(name ==''|| idade == ''||telefone ==''|| sexo ==''|| sintomas ==''){

alert('preencha os campos')
}
if (pagina ==='editar'){

editarPaciente(dados.key,data, navigation)    


} else {
adicionarPaciente(data)
}




}




function pacientescadastrados(){

  navigation.navigate('lista')




}










return(
    <View style={styles.container}>
<View style={styles.inputContainer}>
    <Feather  style={styles.feather} name='user' size={20} color={'black'}/>
    <TextInput placeholder ={pagina =='editar'? dados.name : 'nome do paciente'}
    onChangeText={setName} 
       style={styles.input} />
</View>

    

<View style={styles.inputContainer}>
    <Feather style={styles.feather} name='calendar' size={20} color={'black'}/>
    <TextInput placeholder={pagina === 'editar'?dados.idade:'idade do paciente'}
    onChangeText={setIdade}  
       style={styles.input}
    
    
    />
</View>

<View style={styles.picker}>
    <Text>Qual seu genero ?</Text>
    <Feather style={styles.feather}name='users' size={20} color={'black'}/>

    
    
    <Picker onValueChange={setSexo}>
        <Picker.Item  key={1} value={'masculino'} label="masculino"/>
        <Picker.Item key={2} value={'feminino'} label="feminino"/>
    
    
    
    
    
    </Picker>
</View>

<View style={styles.inputContainer1}>
    <Feather  style={styles.feather} name='phone' size={20} color={'black'}/>
    <TextInput placeholder={pagina ==='editar'? dados.telefone :'telefone do paciente'}
    onChangeText={setTelefone}
       style={styles.input}
    
    
    />
</View>

<View  style={styles.inputContainer}>
    <Feather style={styles.feather} name='heart' size={20} color={'black'}/>
    <TextInput placeholder={pagina ==='editar'? dados.sintomas:'sintomas do paciente'}
    onChangeText={setSintomas}  
    style={styles.input}
    
    
    />
</View>
 <View>
  <TouchableOpacity  style={styles.Button}  buttonName={buttonName}  onPress= {()=> enviarFormulario()}>
    <Text style={styles.texto} >
    Cadastro triagem</Text>
  </TouchableOpacity>
 </View>
<View>

    <TouchableOpacity  style={styles.Button}  buttonName={buttonName}  onPress={()=>pacientescadastrados()}>
    <Text style={styles.texto} >
    ver pacientes cadastrados</Text>
  </TouchableOpacity>
</View>


 <View> </View>


    </View>




)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 24,
    backgroundColor: '#f8f9fa',
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: '#212529',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 4,
    backgroundColor: '#fff',
  },
  feather: {
    marginRight: 8,
    color: '#198754',
  },
  Button: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
