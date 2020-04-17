import express from 'express';
import { User } from '../models';

const router = express.Router();

router.get('/', async(req, res)=> {
    const result = await User.findAll({
        order: [['ID', 'DESC']]
    });
    res.send(result);
})

export default router;