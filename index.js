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
//endpoint read by id [GET]/materia/:id
app.get('/materia/:id', function (req,res){
  //acessamos o parametro de rota id
  const id = req.params.id
  //acessa o item da lista usando id -1
  const item = lista [id-1]
  res.send(item)
})
app.listen(3000)