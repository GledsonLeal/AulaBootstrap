const express = require("express")
const app = express()
const port = 8082
// criar uma variável handlebars para receber o móduo express-handlebars
const handlebars = require("express-handlebars")
// criar uma constante path para trabalhar com o bootstrap
    // o path serve para trabalhar com diretórios, manipular pastas
const path = require("path")

//Configuração
//Configurando o handlebars como template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))// main é o template básico da aplicação
app.set('view engine', 'handlebars')

//Arquivos Public, para trabalhar com o B O O T S T R A P
app.use(express.static(path.join(__dirname, "public")))
//app.use(express.static(path.join(__dirname + "/public")))


//ROTAS
app.get('/', function(req, res){
    res.render('index')
})
//
app.get('/formulario',(req, res)=>{
    res.render('formulario')
})



app.listen(port, function(){
    console.log(`Servidor rodando na url http://localhost:${port}`)
})