import express from 'express';
import allRoutes from './routes/route.js';
import 'dotenv/config';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

app.use('/auth', allRoutes);

const port = process.env.PORT;

app.listen(port,() => {
    console.log("Server rodando na porta 3000.");
})
