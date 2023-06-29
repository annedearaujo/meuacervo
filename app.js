const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const config = require('./config'); // Importa as credenciais de config.js

const app = express();
const cors = require('cors');

// CORS
app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection(config);

// Conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conexão estabelecida com o banco de dados.');
});

// Rota para obter todos os autores
app.get('/autores', (req, res) => {
  connection.query('SELECT * FROM autores ORDER BY nome ASC', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao obter os autores.' });
    } else {
      res.json(results);
    }
  });
});

// Rota para obter todos os livros
app.get('/livros', (req, res) => {
  connection.query('SELECT * FROM livros ORDER BY titulo ASC', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao obter os livros.' });
    } else {
      res.json(results);
    }
  });
});

// Rota para obter sugestões de editoras
app.get('/editoras', (req, res) => {
  const parcialEditora = req.query.editora;
  const query = `SELECT DISTINCT editora FROM livros WHERE editora LIKE '%${parcialEditora}%' LIMIT 5`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao obter as sugestões de editoras.' });
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um novo autor
app.post('/autores', (req, res) => {
  const { nome, data_nasc, pais } = req.body;
  const autor = { nome, data_nasc, pais };

  connection.query('INSERT INTO autores SET ?', autor, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao adicionar um autor.' });
    } else {
      res.json({ message: 'Autor adicionado com sucesso!', id: result.insertId });
    }
  });
});

// Rota para adicionar um novo livro
app.post('/livros', (req, res) => {
  const { titulo, ano, ISBN, editora, edicao, num_paginas, genero, autor_id } = req.body;

  // Verificar se os campos não obrigatórios estão vazios e atribuir null se estiverem
  const livro = {
    titulo,
    ano,
    ISBN,
    editora: editora || null,
    edicao: edicao || null,
    num_paginas: num_paginas || null,
    genero: genero || null,
    autor_id: autor_id || null
  };

  console.log('Livro a ser adicionado:', livro);

  connection.query('INSERT INTO livros SET ?', livro, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao adicionar um livro.' });
    } else {
      res.json({ message: 'Livro adicionado com sucesso!', id: result.insertId });
    }
  });
});

// Inicie o servidor
app.listen(4000, () => {
  console.log('Servidor iniciado na porta 4000.');
});
