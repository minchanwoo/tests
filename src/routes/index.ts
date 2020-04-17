import express from 'express';
import userRouter from './user';
import postRouter from './post';

const router = express.Router();

router.use('/users', userRouter);
router.use('/users', postRouter);

export default router;