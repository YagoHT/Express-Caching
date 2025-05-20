
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('API ativa'));

app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/produtos', require('./routes/produtosRoutes'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
