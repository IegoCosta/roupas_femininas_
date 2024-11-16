const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/clothing_management_db', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Banco de dados conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao Banco de Dados:', error);
  }
};

module.exports = connectDb;





const dbUri = "mongodb://localhost:27017/clothing_management_db"; // Atualize o nome do banco de dados, se necessário.