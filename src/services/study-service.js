import StudyLogsModel from "../models/study-logs-model.js";

export async function createTask(descricao, categoria, duracao, userId) {
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
export async function getStudyByUserId(userId) {
    try {
        const getStudy = await StudyLogsModel.findAll({ where: { userId: userId } });
        console.log(getStudy)
        return getStudy;
    } catch (error) {
        throw error;
    }
}
export async function deleteStudyByUserId(id, userId) {
    try {
        const deleteStudy = await StudyLogsModel.destroy({
            where: {
                id: id,
                userId: userId
            }
        })
        return deleteStudy;
    } catch (error) {
        throw error;
    }
}