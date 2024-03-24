import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import usersRouter from './routes/users';
import loginRouter from './routes/login';
import signupRouter from './routes/signup';

require('dotenv').config();



const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);





export default app;
