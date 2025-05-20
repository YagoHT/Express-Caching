
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 });

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = cache.get(key);
  if (cachedData) {
    require('./logger')('CACHE');
    return res.json(cachedData);
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };
  next();
};

const invalidateCache = () => cache.flushAll();

module.exports = { cacheMiddleware, invalidateCache };
