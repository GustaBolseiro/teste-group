// importacao do FireBase
import { doc, addDoc, deleteDoc, collection, updateDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Components/firebase";
import { useEffect, useState } from "react";

// Busca uma coleção("users") que está no Firebase e coloca em uma variável!
// É necessário usar a função "collection" pois ela cria um ponteiro(referência),
// para uma coleção no Firestore através do "db" que representa a conexão.
const userRef = collection(db, "users");

// LER USUÁRIOS!    
// Função assíncrona por isso o uso de Async e Await.
// Função personalizada (hook) para ler usuários
export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(db, "users");
    // onSnapshot busca dados em tempo real!
    const unsubscribe = onSnapshot(userRef, (snapshot) => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),  // Pega os dados do documento e adiciona o ID
      }));
      setUsers(list);  // Atualiza o estado com os dados dos usuários
    });
    // Limpeza do listener ao desmontar o componente
    return () => unsubscribe();
  }, []); // A dependência vazia [] faz com que o efeito execute apenas uma vez, ao montar o componente
  return users;  // Retorna a lista de usuários
};

// CRIA NOVOS USUÁRIOS!
export const createUser = async (name, phone) => {
    if (name === '') return;
    await addDoc(userRef, {name, phone})
    console.log("CRIADO COM SUCESSO!")
};

// APAGA USUÁRIOS EXISTENTES!
export const removeUser = async(id) => {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    console.log("DELETADO COM SUCESSO!")
};

// EDITA UM USUÁRIO
export const updateUser = async (id, name, phone) => {
    console.log("EDITADO COM SUCESSO!!!")
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, {
        name: name,
        phone: phone,
    });
};

// Atualiza os input de edição para receber um valor que já existe no Firebase!
export const formEdit = async (id) => {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    const data = snapshot.data()
    return data;
};