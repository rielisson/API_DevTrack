import SkillsService from "../services/skills.service.js";


class SkillsController {
    static async addSkill(req, res) {
        try {
            const { nome, level} = req.body;
            const userId =  req.userId;

            const skill = await SkillsService.createSkill(nome, level, userId);
            return res.status(200).json({ msg: 'Habilidade adicionada com sucesso.'});
        } catch (error) {
            return res.status(500).json({ msg: 'Erro ao adicionar habilidade.' });
        }
    }
}


export default SkillsController;