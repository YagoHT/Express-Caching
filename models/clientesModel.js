
const db = require('../configs/db');

module.exports = {
  getAll: () => db.query('SELECT * FROM clientes'),
  getById: (id) => db.query('SELECT * FROM clientes WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO clientes SET ?', [data]),
  update: (id, data) => db.query('UPDATE clientes SET ? WHERE id = ?', [data, id]),
  remove: (id) => db.query('DELETE FROM clientes WHERE id = ?', [id])
};
