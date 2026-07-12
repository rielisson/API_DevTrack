import SkillsModel from "../models/skills-model.js";

export async function createSkill(nome, level, userId) {
    try {
        const skill = await SkillsModel.create({
            nome: nome,
            level: level,
            userId: userId
        })
        return skill;
    } catch (error) {
        throw error;
    }
}


export async function getSkillsCountService(userId) {
    try {
        const skills = await SkillsModel.count({where: {userId} })
        return skills;
    } catch (error) {
        throw error;
    }
}

export async function fecthSkillsService(userId) {
    try {
        const skillsUser = await SkillsModel.findAll({where: {userId : userId}})
        return skillsUser;
    } catch (error) {
        throw error;
    }
}