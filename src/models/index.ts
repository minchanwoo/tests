import { sequelize } from './sequelize';

import User, { relationUser } from './user';
import Post, { relationPost } from './post';

export {
  sequelize,
  User,
  Post
}

relationUser();
relationPost();
