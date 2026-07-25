import SkillsModel from "../models/skills-model.js";

export async function createSkill(name, level, nivel, userId) {
    try {
        const skill = await SkillsModel.create({
            name: name,
            level: level,
            nivel: nivel,
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