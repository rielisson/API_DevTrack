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
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        level: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        nivel: {
            type: DataTypes.INTEGER,
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