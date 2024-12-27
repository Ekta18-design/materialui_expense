// src/app.js
import express from 'express';
//import path from 'path';
//import { fileURLToPath } from 'url';
//import { dirname } from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import userMasterRoutes from './routes/usermaster.js';
import partyMasterRoute from './routes/partymaster.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serve static files from the "uploads" directory


app.use('/usermaster', userMasterRoutes);
app.use('/partymaster',partyMasterRoute);


export default app;
