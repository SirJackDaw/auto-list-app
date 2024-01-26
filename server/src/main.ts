import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

import mongoose from 'mongoose';
import { registerRoutes } from './routes/routesV1.js';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});

const MONGO_URL = 'mongodb://localhost:27017/cars'; // DB URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', registerRoutes());