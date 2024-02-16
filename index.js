// Express lib
const exp = require('constants');
const express = require('express');
// Função do express
const app = express();
// Caminho relativo
const path = require('path');
// Criando rotas
const router = express.Router();

app.use(express.static("public"));
 
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

//Criando função da rota
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(__dirname);
    console.log("index");
});

//Criando outra rota
router.get('/sobre', function (req, res) {
    console.log("Sobre");
    res.sendFile(path.join(__dirname + '/sobre.html'))
})

router.get('/artes', function (req, res) {
    console.log("Artes");
    res.sendFile(path.join(__dirname + '/artes.html'))
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("server rodando");