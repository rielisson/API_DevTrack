import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o MySQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
}

testConnection();

export default sequelize;