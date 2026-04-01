import StudyLogsModel from "../models/studyLogs.model.js";

class StudyService {
    static async CreateTask (descricao, categoria, duracao, userId) {
        try {
            const createTask = await StudyLogsModel.create({
                descricao: descricao,
                categoria: categoria,
                duracao: duracao,
                userId: userId
            })
            console.log(createTask);
            return createTask;
        } catch (erro) {
            throw erro;
        }
    }
    static async getStudyByUserId(userId) {
        try {
            const getStudy = await StudyLogsModel.findAll({where: {userId: userId}});
            console.log(getStudy)
            return getStudy;
        } catch (error) {
            throw error;
        }
    }
}

export default StudyService;