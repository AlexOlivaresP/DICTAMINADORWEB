

// Inicia Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

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

// Función para registrar usuario
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = fullnameInput.value;
    const email = emailInput.value;
    const username = regUsernameInput.value;
    const password = regPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Verificar que las contraseñas coinciden
    if (password !== confirmPassword) {
        registerMessage.innerHTML = "Las contraseñas no coinciden.";
        return;
    }

    // Registrar usuario con Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Actualizar el nombre de usuario
            user.updateProfile({
                displayName: fullname
            }).then(() => {
                // Guardar datos en Realtime Database
                const userRef = firebase.database().ref("users/" + user.uid);
                userRef.set({
                    fullname: fullname,
                    email: email,
                    username: username
                }).then(() => {
                    registerMessage.innerHTML = "Usuario registrado correctamente.";
                    window.location.href = "index.html"; // Redirigir a login después del registro
                }).catch((error) => {
                    registerMessage.innerHTML = "Error al guardar en la base de datos: " + error.message;
                });
            }).catch((error) => {
                registerMessage.innerHTML = "Error al actualizar el perfil: " + error.message;
            });
        })
        .catch((error) => {
            // Manejar errores de registro
            const errorCode = error.code;
            const errorMessage = error.message;
            registerMessage.innerHTML = "Error: " + errorMessage;
        });
});
