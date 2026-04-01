import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const StudyLogsModel = sequelize.define(
    'studyLogs',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        duracao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Nome da tabela referenciada
                key: 'id'
            }
        }
    },
)

export default StudyLogsModel;
