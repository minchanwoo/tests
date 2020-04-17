import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

import { Post } from './';

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nick: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: "user",
    paranoid: true
  }
);

export const relationUser = () => {
    User.hasMany(Post, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'})
}

export default User;