const { User } = require('../database/models');

const getAll = async () => {
  const result = await User.findAll();
  return result;
};

const getOne = async (id) => {
  const result = await User.findOne({ where: { id } });
  return result;
};

const addOne = async (name) => {
  const result = await User.create({ name });
  return result;
};

const updateOne = async (id, name) => {
  const result = await User.update({ name }, { where: { id } });
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