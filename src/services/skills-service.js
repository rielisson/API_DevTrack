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
