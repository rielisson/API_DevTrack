import 'dotenv/config';
import express from 'express';
import allRoutes from './routes/route.js';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

app.use('/auth', allRoutes);

const port = process.env.PORT;

async function startApp() {
    try {
        await sequelize.sync({ alter: true});
        console.log('✅ Banco de dados sincronizado e tabelas criadas!');

        app.listen(port,() => {
        console.log("🚀 Servidor rodando na porta 3000");
        })
    } catch (error) {
        console.log('❌ Erro ao iniciar o sistema:', error);
    }
}

startApp();