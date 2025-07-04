import db from '../data/firebaseconnection';
import { ref, push, onValue, remove, update } from 'firebase/database';

export function listarPacientes() {
  return new Promise((resolve, reject) => {
    const pacientesRef = ref(db, 'pacientes');
    onValue(pacientesRef, (snapshot) => {
      let returnArr = [];
      snapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      resolve(returnArr);
    }, (error) => {
      reject(error);
    });
  });
}

export function adicionarPaciente(data) {
  const pacientesRef = ref(db, 'pacientes');
  push(pacientesRef, data);
  alert('Paciente cadastrado com sucesso');
}

export function excluirPaciente(keypaciente) {
  const pacienteRef = ref(db, `pacientes/${keypaciente}`);
  remove(pacienteRef);
  alert('Paciente removido com sucesso');
}




export function editarPaciente(keypaciente, data) {
  const pacienteRef = ref(db, `pacientes/${keypaciente}`);
  
  update(pacienteRef, data)
    .then(() => {
      alert('Paciente editado com sucesso');
    })

}
