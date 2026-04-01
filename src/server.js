import 'dotenv/config';
import express from 'express';
import allRoutes from './routes/route.js';
import db from './models/index.model.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/auth', allRoutes);


const port = process.env.PORT || 3000;

async function startApp() {
    try {
        await db.sequelize.sync(
        );
        console.log('✅ Banco de dados sincronizado e tabelas criadas!');

        app.listen(port,() => {
        console.log("🚀 Servidor rodando na porta 3000");
        })
    } catch (error) {
        console.log('❌ Erro ao iniciar o sistema:', error);
    }
}

startApp();