
const db = require('../configs/db');

module.exports = {
  getAll: () => db.query('SELECT * FROM produtos'),
  getById: (id) => db.query('SELECT * FROM produtos WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO produtos SET ?', [data]),
  update: (id, data) => db.query('UPDATE produtos SET ? WHERE id = ?', [data, id]),
  remove: (id) => db.query('DELETE FROM produtos WHERE id = ?', [id])
};
