import 'dotenv/config';
import express from 'express';
import allRoutes from './routes/route.js';
import db from './models/index-model.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import sequelize from './config/db.js';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(cookieParser());
app.use(express.json());


app.use('/auth', allRoutes);


const port = process.env.DB_PORT || 3000;
async function startApp() {
    try {
        //await sequelize.sync({ alter: true });
        // await sequelize.sync({ force: true }); // ⚠️ Apaga e recria todas as tabelas
        //console.log('Tabelas criadas/atualizadas com sucesso! ✨');
        app.listen(port, () => {
            console.log("🚀 Servidor rodando na porta: ", port );
        })
    } catch (error) {
        console.log('❌ Erro ao iniciar o sistema:', error);
    }
}

startApp();