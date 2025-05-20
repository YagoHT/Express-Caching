
const model = require('../models/clientesModel');
const { invalidateCache } = require('../middlewares/cache');
const log = require('../middlewares/logger');

module.exports = {
  async getAll(req, res) {
    const [rows] = await model.getAll();
    log('DB');
    res.json(rows);
  },
  async create(req, res) {
    await model.create(req.body);
    invalidateCache();
    res.status(201).json({ message: 'Cliente criado' });
  },
  async update(req, res) {
    await model.update(req.params.id, req.body);
    invalidateCache();
    res.json({ message: 'Cliente atualizado' });
  },
  async remove(req, res) {
    await model.remove(req.params.id);
    invalidateCache();
    res.json({ message: 'Cliente deletado' });
  }
};
