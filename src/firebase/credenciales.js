// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBav6pWto3HbHOZaFwCm9ZwKE2-DZV9HLQ",
  authDomain: "applogin-957e2.firebaseapp.com",
  projectId: "applogin-957e2",
  storageBucket: "applogin-957e2.appspot.com",
  messagingSenderId: "436371802677",
  appId: "1:436371802677:web:61a8118dcddb292fd2bf7c"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
