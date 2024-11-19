const express = require('express');
const app = express();
const PORT = 8080; // Asegúrate de que coincida con el puerto configurado

// Middleware para servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta para manejar GET /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Sirve el archivo index.html
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

