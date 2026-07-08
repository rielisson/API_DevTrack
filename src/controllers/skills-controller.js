import {createSkill, getskills} from "../services/skills-service.js";

export async function addSkill(req, res) {
    try {
        const { nome, level } = req.body;
        const userId = req.userId;

        const skill = await createSkill(nome, level, userId);
        return res.status(200).json({ msg: 'Habilidade adicionada com sucesso.' });
    } catch (error) {
        return res.status(500).json({ msg: 'Erro ao adicionar habilidade.' });
    }
}

export async function getSkills(req, res) {
    try {
        const userId = req.userId;
        const getSkills = await getskills(userId);
        console.log(getSkills);
        return res.status(201).json({skills: getSkills});
    } catch (error) {
        res.status(500).json({msg: "Erro ao pegar quantidade de skills." + error});
    };
}
