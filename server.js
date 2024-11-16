const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const connectDb = require('./db');
const clothingRoutes = require('./controllers/clothing.controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/clothes', clothingRoutes); // Rotas para gerenciamento de roupas

// Configurações do template
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  extname: "hbs",
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'mainLayout.hbs'
}));
app.set('view engine', '.hbs');

connectDb()
  .then(() => {
    console.log('Banco de dados conectado com sucesso');
    app.listen(4000, () => {
      console.log('Servidor rodando na porta 4000');
    }).on('error', err => console.log('Erro ao iniciar o servidor:', err));
  })
  .catch(err => console.log('Erro ao conectar ao Banco de Dados:', err));
