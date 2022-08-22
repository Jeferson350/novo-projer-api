const express = require('express');
 
const app = express();
 
app.get('/home', (req, res) => {
    res.send('Olá Turma. Nossa primeira API22!');
});
 
app.listen(3333);