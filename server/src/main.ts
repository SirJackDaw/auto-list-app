import express from 'express';
import { generateApp } from './app.js';
import { connectMongo } from './database/mongoConnection.js';

const StartServer = async() => {

    const app = express();
    
    await connectMongo()
    await generateApp(app);

    app.listen(3000, () => {
        console.log(`listening to port ${3000}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();