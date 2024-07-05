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

//sinaliza para o express que estamos usando json no body 
app.use(express.json())

//create [POST]/materia
app.post('/materia', function (req,res){
  //acessamos o body da requisição
  const body = req.body
  //acessamos a propriedade 'nome' do body 
  const novoItem = body.nome
  //adicionamos na lista
  lista.push(novoItem)
  //exibimos uma mensagem de sucesso
  res.send('item adicionado com sucesso: ' + novoItem)
})
app.listen(3000)