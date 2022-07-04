module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    task: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, { timestamps: true });

  Task.associate = (models) => {
    Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Task;
};
