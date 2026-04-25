import {createTask, getStudyByUserId, deleteStudyByUserId} from "../services/study-service.js";

export async function studyRegister(req, res) {
    try {

        const { descricao, categoria, duracao } = req.body;
        const userId = req.userId;
        const registro = await createTask(descricao, categoria, duracao, userId);

        return res.status(200).json({ msg: 'Registro de estudo registrado com sucesso.' })
    } catch (error) {
        console.error("❌ ERRO DETALHADO:", error.errors ? error.errors[0].message : error.message);
        console.error("❌ NOME DO ERRO:", error.name)
        return res.status(400).json({ msg: "Error ao registrar estudo." });
    }
}

export async function getStudyLogs(req, res) {
    try {
        const userId = req.userId;
        const getStudy = await getStudyByUserId(userId);

        if (!getStudy) {
            return res.status(404).json({ msg: "Estudo não encontrado." })
        }
        return res.status(200).json({ msg: getStudy });
    } catch (error) {
        return res.status(400).json({ mgs: "não foi possivel pega os estudos." })
    }
}

export async function deleteStudy(req, res) {
    try {
        const userId = req.userId;
        const { id } = req.params;
        const deleteStudy = await deleteStudyByUserId(id, userId);
        if (deleteStudy === 0) {
            return res.status(404).json({ msg: "registro não encontrado." });
        }
        return res.status(200).json({ msg: "Registro deletado com sucesso." });
    } catch (error) {
        console.error("❌ ERRO DETALHADO:", error.errors ? error.errors[0].message : error.message);
        return res.status(404).json({ msg: "erro ao deletar registro de estudo." });
    }
}
