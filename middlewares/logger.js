
const chalk = require('chalk');

function logSource(source) {
  const msg = source === 'CACHE' ? chalk.blue('[CACHE]') : chalk.green('[DB]');
  console.log(`${msg} Resposta enviada`);
}

module.exports = logSource;
