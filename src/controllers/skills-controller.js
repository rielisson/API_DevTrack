import {createSkill, getSkillsCountService, fecthSkillsService} from "../services/skills-service.js";

export async function addSkill(req, res) {
    try {
        const { name, level, nivel } = req.body;
        const userId = req.userId;
        const skill = await createSkill(name, level, nivel, userId);
        return res.status(200).json({ msg: 'Habilidade adicionada com sucesso.' });
    } catch (error) {
        return res.status(500).json({ msg: 'Erro ao adicionar habilidade.' });
    }
}

export async function getSkillsCount(req, res) {
    try {
        const userId = req.userId;
        const getSkills = await getSkillsCountService(userId);
        return res.status(201).json({skills: getSkills});
    } catch (error) {
        res.status(500).json({msg: "Erro ao pegar quantidade de skills." + error});
    };
}

export async function fecthSkills(req, res) {
    try {
        const userid = req.userId;
        const fetchskillsUser = await fecthSkillsService(userid);
        return res.status(201).json({skills: fetchskillsUser});
    } catch (error) {
        res.status(500).json({msg: "Erro ao pegar skills." + error});
    };
}

