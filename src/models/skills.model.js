import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const SkillsModel = sequelize.define(
    'skills',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        level: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }
)


export default SkillsModel;