const express = require('express');
const app = express();

app.get('/discente', (req, res) => { res.send('Discente') });

app.post('/docente', (req, res) => { res.send('Docente') });

app.delete('/curso', (req, res) => { res.send('Curso') });

app.put('/disciplina', (req, res) => { res.send('Disciplina') });

app.all('/', (req, res) => { res.send(req.method) });

app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });