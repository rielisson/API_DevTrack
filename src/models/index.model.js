import sequelize from "../config/db.js";
import User from "./user.model.js";
import StudyLogsModel from "./studyLogs.model.js";
import SkillsModel from "./skills.model.js";


// DEFINIÇÃO DAS ASSOCIAÇÕES (CHAVES ESTRANGEIRAS) ---

User.hasMany(StudyLogsModel, {
    foreignKey: 'userId',
    onDelete: 'CASCADE' // Se deletar o User, apaga os estudos dele
})
StudyLogsModel.belongsTo(User, {
    foreignKey: 'userId'
})

User.hasMany(SkillsModel, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

SkillsModel.belongsTo(User, {
    foreignKey: 'userId'
})


export default { sequelize, User, StudyLogsModel, SkillsModel}