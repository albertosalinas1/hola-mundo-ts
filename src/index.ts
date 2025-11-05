import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hola Mundo desde Node JS con TypeScript y Express!');
});

app.get('/saludo/:nombre', (req, res) => {
  res.send(`Hola, ${req.params.nombre}`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
