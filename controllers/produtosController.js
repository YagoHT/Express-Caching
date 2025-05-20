
const model = require('../models/produtosModel');
const log = require('../middlewares/logger');

module.exports = {
  async getAll(req, res) {
    try {
      const [rows] = await model.getAll();
      log('DB');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  },

  async create(req, res) {
    try {
      await model.create(req.body);
      res.status(201).json({ message: 'Produto criado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      await model.update(id, req.body);
      res.json({ message: 'Produto atualizado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  },

  async remove(req, res) {
    try {
      const id = req.params.id;
      await model.remove(id);
      res.json({ message: 'Produto deletado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
};
