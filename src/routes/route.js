import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers.js";
const router = Router();

router.get('/', (req, res) => {
    res.send("ola");
})

router.post('/signup', AuthControllers.signup);

router.post('/login', AuthControllers.login);


export default router;