import SkillsModel from "../models/skills.model.js";

class SkillsService {
    static async createSkill(nome, level, userId) {
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
}


export default SkillsService;