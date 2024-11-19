// Importa las bibliotecas necesarias de Firebase
// const { initializeApp } = require("firebase/app");
// const { getDatabase, ref, set, get } = require("firebase/database");
// Inicializa Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEA7RfayOXIc2jligR5KW0VXoLWPSCi_E",
    authDomain: "dictaminador3312.firebaseapp.com",
    databaseURL: "https://dictaminador3312.firebaseio.com/",
    projectId: "dictaminador3312",
    storageBucket: "dictaminador3312.appspot.com",
    messagingSenderId: "236427358093",
    appId: "1:236427358093:web:97cc9120ccac561ae257c4"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos
const database = getDatabase(app);

// Escribir datos en la base de datos
set(ref(database, "prueba"), {
    nombre: "Juan Pérez",
    edad: 30
})
  .then(() => {
    console.log("Datos guardados exitosamente.");
  })
  .catch((error) => {
    console.error("Error al guardar datos:", error);
  });

// Leer datos de la base de datos
get(ref(database, "prueba"))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log("Datos leídos:", snapshot.val());
    } else {
      console.log("No se encontraron datos.");
    }
  })
  .catch((error) => {
    console.error("Error al leer datos:", error);
  });
