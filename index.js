const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
const lista = ['c++','Python','POO Java']
//Read all [GET] /matérias
app.get('/materia', function (req,res){
  res.send(lista.filter(Boolean))
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
  //checa se o 'nome' está presente no body 
  if(!novoItem){
    return res.send('corpo da requisição deve conter a propriedade `nome`')
  }
  //checa se o novoItem esta na lista ou não 
  if(lista.includes(novoItem)){
    return res.send('item ja existe na lista')
  }
  //adicionamos na lista
  lista.push(novoItem)
  //exibimos uma mensagem de sucesso
  res.send('item adicionado com sucesso: ' + novoItem)
})

//upadate [PUT]/materia/:id
app.put('/materia/:id', function (req,res){
  //acessamos o id dos parametros de rota
  const id = req.params.id
  //acessamos o body da requisição 
  const body = req.body
  //acessamos a propriedade 'nome' do body
  const novoItem = body.nome
  //checa se o 'nome' está presente no body 
  if(!novoItem){
    return res.send('corpo da requisição deve conter a propriedade `nome`')
  }
  //checa se o novoItem esta na lista ou não 
  if(lista.includes(novoItem)){
    return res.send('item ja existe na lista')
  }
  //atualizamos na lista o novoItem pelo id-1 
  lista[id-1] = novoItem
  //enviamos uma mensagem de sucesso 
  res.send('item atualizado com sucesso: ' + id  + '-' + novoItem)
})

//delete [DELETE] /matreria/:id
app.delete('/materia/:id', function (req,res){
  //acessamos o id do parametro de rota
  const id = req.params.id
  //remover o item da lista usando id-1
  delete lista[id-1]
  //enviamos uma mensagem de sucesso 
  res.send('item removido com sucesso ' + id)
})
app.listen(3000)