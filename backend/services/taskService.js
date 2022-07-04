const { Task, User } = require('../database/models');

const getAll = async () => {
  const result = await Task.findAll();
  return result;
};

const getOne = async (id) => {
  const result = await Task.findOne({ where: { id } });
  return result;
};

const addOne = async (task, status, userId) => {
  const result = await Task.create({ task, status, userId });
  return result;
};

const updateOne = async (id, task, status, userId) => {
  const result = await User.update({ task, status, userId }, { where: { id } });
  return result;
};

const deleteOne = async (id) => {
  const result = await User.destroy({ where: { id } });
  return result;
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};