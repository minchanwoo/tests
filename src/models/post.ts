import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

import { User } from './';

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: "post",
    paranoid: true
  }
);

export const relationPost = () => {
    Post.belongsTo(User, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'})
}

export default Post;