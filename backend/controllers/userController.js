const userService = require('../services/userService');

const getAll = async (_req, res, _next) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

module.exports = {
  getAll,
};