import { Router } from "express";
import {signup, login} from '../controllers/auth-controller.js';
import {addSkill, getSkills} from '../controllers/skills-controller.js';
import {studyRegister, getStudyLogs, deleteStudy} from '../controllers/study-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';
const router = Router();

router.get('/', (req, res) => {
    res.send("ola");
})
// rotas de autenticação
router.post('/signup', signup);
router.post('/login', login);

// rotas de criações de estudos
router.get('/getStudy', authMiddleware, getStudyLogs);
router.post('/registerStudy', authMiddleware, studyRegister);
router.post('/addSkill', authMiddleware, addSkill);
router.get('/getSkill', authMiddleware, getSkills);
router.delete('/study/:id', authMiddleware, deleteStudy);
export default router;