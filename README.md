📚 DevTrack - FullStack Project
Este repositório contém o ecossistema completo do DevTrack, uma plataforma para desenvolvedores gerenciarem seu tempo de estudo e evolução de habilidades.

🏗️ Estrutura do Repositório
O projeto é dividido em duas partes principais:

/backend: API REST construída com Node.js, Express e Sequelize (MySQL).

/frontend: Interface do usuário (em desenvolvimento) para visualização dos logs e dashboards.

🛠️ Tecnologias e Arquitetura
Backend (API)
Node.js & Express: Servidor e roteamento.

Sequelize ORM: Modelagem de dados e associações (User, StudyLogs, Skills).

JWT (Json Web Token): Autenticação e proteção de rotas.

Bcrypt: Criptografia de senhas.

Frontend
Tecnologia sendo definida (React / Vue / Vanilla JS).

Integração via Axios/Fetch API com o backend.

🚦 Como Iniciar
1. Backend
Bash
cd backend
npm install
# Configure seu arquivo .env com as credenciais do MySQL
npm start
2. Frontend
Bash
cd frontend
# Comandos de instalação do seu front aqui
🔒 Regras de Negócio Implementadas
Isolamento de Dados: Cada usuário só tem acesso aos seus próprios StudyLogs e Skills, validado via userId no JWT.

Relacionamentos SQL: * User.hasMany(StudyLogs)

User.hasMany(Skills)

Segurança: Senhas nunca são salvas em texto puro no banco de dados.

👤 Autor
Breno – Software Developer

"Focado em construir sistemas escaláveis e organizados."
