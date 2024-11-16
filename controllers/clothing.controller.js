const express = require('express');
const router = express.Router();
const Clothing = require('../models/clothing.model');

// Adicionar roupa
router.post('/add', async (req, res) => {
  try {
    const newClothing = new Clothing(req.body);
    await newClothing.save();
    res.redirect('/clothes');
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar roupa", error });
  }
});

// Listar roupas
router.get('/', async (req, res) => {
  try {
    const clothes = await Clothing.find();
    res.render('clothes/index', { clothes });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar roupas", error });
  }
});

// Página para adicionar ou editar roupa
router.get('/add', (req, res) => {
  res.render('clothes/addOrEdit', { clothing: {} });
});

// Editar roupa
router.post('/update/:id', async (req, res) => {
  try {
    await Clothing.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/clothes');
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar roupa", error });
  }
});

// Deletar roupa
router.post('/delete/:id', async (req, res) => {
  try {
    await Clothing.findByIdAndDelete(req.params.id);
    res.redirect('/clothes');
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar roupa", error });
  }
});

router.get('/', async (req, res) => {
  try {
    const clothes = await Clothing.find();
    console.log(clothes); // Verifique o conteúdo no console
    res.render('clothes/index', { clothes });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar roupas", error });
  }
});


module.exports = router;
