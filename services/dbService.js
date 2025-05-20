
// dbService.js
// Utilitário opcional para executar queries
const db = require('../configs/db');

async function executeQuery(sql, params = []) {
  try {
    const [rows] = await db.query(sql, params);
    return rows;
  } catch (error) {
    console.error('Erro ao executar query:', error);
    throw error;
  }
}

module.exports = { executeQuery };
