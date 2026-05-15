const express = require("express");
const app = express();

const {engine} = require ("express-handlebars");

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set("view engine", 'handlebars')

app.get("/pagamentos", function(req, res){
    res.render("pagamentos");
});
app.get("/add-pagamentos", function(req, res){
    res.send("Formulário para cadastrar pagamentos");
});

app.listen(8086);
console.log("Servidor rodando em http://localhost:8086")