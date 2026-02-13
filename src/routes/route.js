import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("ola");
})


export default router;