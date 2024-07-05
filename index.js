const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
const lista = ['c++','Python','POO Java']
//Read all [GET] /matérias
app.get('/materia', function (req,res){
  res.send(lista)
})

app.listen(3000)