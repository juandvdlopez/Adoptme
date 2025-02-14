import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'; 


import  {info} from './docs/info.js';
import { connDB } from './config/db.connection.js';
import { config } from './config/config.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express(); 

const swaggerSpec = swaggerJSDoc(info);



const PORT = config.PORT||8080;

//const connection = mongoose.connect("mongodb+srv://juandvdlopez:coder123@cluster0.jbexb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use ('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


mongoose.set('strictQuery', false); 


connDB(config.MONGO_URL,config.DB_NAME);