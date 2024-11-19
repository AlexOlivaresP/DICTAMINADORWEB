import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEA7RfayOXIc2jligR5KW0VXoLWPSCi_E",
    authDomain: "dictaminador3312.firebaseapp.com",
    databaseURL: "https://dictaminador3312.firebaseio.com/",
    projectId: "dictaminador3312",
    storageBucket: "dictaminador3312.appspot.com",
    messagingSenderId: "236427358093",
    appId: "1:236427358093:web:97cc9120ccac561ae257c4"
  };
firebase.initializeApp(firebaseConfig);

// Referencia a los elementos del formulario de login
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Función para el login
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Usuario autenticado
            const user = userCredential.user;
            message.innerHTML = "Bienvenido, " + user.displayName;
            window.location.href = "dashboard.html"; // Redirigir a página de bienvenida o dashboard
        })
        .catch((error) => {
            // Manejar errores
            const errorCode = error.code;
            const errorMessage = error.message;
            message.innerHTML = "Error: " + errorMessage;
        });
});
