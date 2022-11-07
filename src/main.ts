import express from "express";
import 'dotenv/config';
import App from './app'

/*const app = express();
app.use(express.json());
const PORT = process.env.APP_PORT;
app.use('/api/words', wordRoutes);
app.use('/api/categories', categoryRoutes);*/

App.listen(process.env.APP_PORT as unknown as number | 3001);