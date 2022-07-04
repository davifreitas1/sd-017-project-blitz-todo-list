module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Task, { foreignKey: 'userId', as: 'tasks' });
  };

  return User;
};
