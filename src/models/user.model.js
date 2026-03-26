import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.CHAR(255),
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }
    },
)

export default User;
