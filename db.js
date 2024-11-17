const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/clothing_management_db');
    console.log('Database conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao Banco de Dados:', error);
  }
};

module.exports = connectDb;
