import StudyService from "../services/study.service.js";

class StudyLogsController {
    static async studyRegister(req, res) {
        try {

            const { descricao, categoria, duracao } = req.body;
            const userId = req.userId;
            const registro = await StudyService.CreateTask(descricao, categoria, duracao, userId);

            return res.status(200).json({ msg: 'Registro de estudo registrado com sucesso.' })
        } catch (error) {
            console.error("❌ ERRO DETALHADO:", error.errors ? error.errors[0].message : error.message);
            console.error("❌ NOME DO ERRO:", error.name)
            return res.status(400).json({ msg: "Error ao registrar estudo." });
        }
    }

    static async getStudyLogs(req, res) {
        try {
            const userId = req.userId;
            const getStudy = await StudyService.getStudyByUserId(userId);

            if(!getStudy) {
                return res.status(404).json({msg: "Estudo não encontrado."})
            }
            return res.status(200).json({msg: getStudy});
        } catch (error) {
            return res.status(400).json({mgs: "não foi possivel pega os estudos."})
        }
    }
}

export default StudyLogsController;