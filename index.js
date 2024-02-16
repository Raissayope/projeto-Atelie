const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

// Define o diretório para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));

// Rota para a página inicial
router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','html', 'index.html'));
});

// Rota para a página 'sobre'
router.get('/sobre', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','html', 'sobre.html'));
});

// Rota para a página 'artes'
router.get('/artes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public','html', 'artes.html'));
});

// Usa o roteador para lidar com as rotas
app.use('/', router);

// Define a porta para ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
