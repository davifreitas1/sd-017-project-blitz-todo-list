const taskService = require('../services/taskService');

const getAll = async (_req, res, _next) => {
  const result = await taskService.getAll();
  return res.status(200).json(result);
};

module.exports = {
  getAll,
};