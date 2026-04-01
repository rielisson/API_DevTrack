import StudyServices from "../services/study.services.js";

class StudyLogsController {
    static async studyRegister(req, res) {
        try {

            const { descricao, categoria, duracao } = req.body;
            const userId = req.userId;
            const registro = await StudyServices.CreateTask(descricao, categoria, duracao, userId);
            console.log(registro);
            return res.status(200).json({ msg: 'Registro de estudo registrado com sucesso.' })
        } catch (error) {
            console.error("❌ ERRO DETALHADO:", error.errors ? error.errors[0].message : error.message);
            console.error("❌ NOME DO ERRO:", error.name)
            return res.status(400).json({ msg: "Error ao registrar estudo." });
        }
    }
}

export default StudyLogsController;