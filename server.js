const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

const PORT = 80;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Acesse também via IP local (ex: http://192.168.x.x/Home.html)');
});
