const express = require('express');
const app = express();

let objetos = [
    { texto: "texto1" },
    { texto: "texto2" },
];

app.get('/teste/:id', (req, res) => {
    res.send('O id digitado foi: ' + req.params.id);
});

app.post('/teste/:texto', (req, res) => {
    let objetoTeste = {
        texto: req.params.texto,
    }
    res.json(objetoTeste);
});

app.get('/objetos', (req, res) => {
    res.json(objetos);
});

app.listen(3000, () => {
    console.log('Server started');
});