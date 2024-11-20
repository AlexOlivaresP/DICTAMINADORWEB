import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = 8080; // Asegúrate de que coincida con el puerto configurado

// Obtén el directorio actual en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta para manejar GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Sirve el archivo index.html
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
