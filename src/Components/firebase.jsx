import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// configurações do FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyClB4a_sGKOm0pf7qZ2o5sUWmCtG0JRK5A",
    authDomain: "react-crud-ddf7c.firebaseapp.com",
    projectId: "react-crud-ddf7c",
  };

// Conecta o projeto React ao projeto Firebase!
const app = initializeApp(firebaseConfig);
  
// getFirestore pega o "app" e retorna ao Firebase,
// ele retorna um objeto que representa a conexão com o Firestore(Banco de Dados),
// após isso, ele guarda essa conexão dentro da variável "db" para usar depois.
const db = getFirestore(app);

export {db};