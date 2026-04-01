import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import StudyLogsController from "../controllers/study.controller.js";
import SkillsController from "../controllers/skills.controller.js";
const router = Router();

router.get('/', (req, res) => {
    res.send("ola");
})
// rotas de autenticação
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

// rotas de criações de estudos
router.get('/getStudy', authMiddleware, StudyLogsController.getStudyLogs);
router.post('/registerStudy', authMiddleware, StudyLogsController.studyRegister);
router.post('/addSkill', authMiddleware, SkillsController.addSkill);

export default router;