import StudyLogsModel from "../models/study-logs-model.js";

export async function createTask(title, description, category, duration, userId) {
    try {
        const createTask = await StudyLogsModel.create({
            title: title,
            description: description,
            category: category,
            duration: duration,
            userId: userId
        })
        return createTask;
    } catch (erro) {
        throw erro;
    }
}
export async function getStudyByUserId(userId) {
    try {
        const getStudy = await StudyLogsModel.findAll({ where: { userId: userId } });
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