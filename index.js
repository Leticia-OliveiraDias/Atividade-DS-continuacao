// config inicial chamar o express vai procurar o módulo

const express = require('express');


const mongoose = require('mongoose');

const Person = require('./models/Person');

const app = express(); // Inicializar as apps


//forma de ler JSON UTILIZAR MIDDLEWARES

// Middleware para aceitar JSON
app.use(express.json());

// Middleware para aceitar dados via formulário (caso use futuramente)
app.use(express.urlencoded({ extended: true }));

app.post('/person', async (req, res) => {
  const  { name, salary, approved } = req.body;

  const person = { 
    name,
    salary,
    approved
  };

  try{
    await Person.create(person);

    res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'});
  } catch (error) {
    res.status(500).json({ erro: error });
  }


});


//rota inicial GET pegar algo so servidor endpoint

app.get('/', (req, res) => {


//mostrar requisição mostrar a resposta que vai ser JSON

res.json({ message: 'Oi Thiago meu nome é Leticia'});

});
 
mongoose.connect('mongodb://localhost:27017/ARQUIVO')
 .then(() => {
    console.log('Conectou ao banco!');
    app.listen(3000 )

  
 })

 .catch((err) => console.log(err));



