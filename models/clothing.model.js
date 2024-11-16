const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tamanho: { type: String, required: true },
  cor: { type: String, required: true },
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true }
});

module.exports = mongoose.model('Clothing', clothingSchema);
