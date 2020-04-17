import express from 'express';
import cors from 'cors';

import { sequelize, User } from './models';
import routes from './routes';

const app = express();

sequelize.sync();

app.use(cors({
    origin: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.get('/', async(req, res)=> {
    res.send('HELLO HEROKU~!!')
})

app.listen(4000, ()=> {
    console.log('server starting~!!')
})