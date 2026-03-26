import bcrypt from 'bcrypt';
import AuthModel from '../models/auth.model.js';
import User from '../models/user.model.js';

class AuthController {
    async signup(req, res) {
        try {
            let { email, senha } = req.body;
            const saltRounds = 10;
            let hashPassword = await bcrypt.hash(senha, saltRounds);
            let createUser = await AuthModel.signup({ email, senha: hashPassword });
            res.status(201).json({msg: "Usuario criado com sucesso."})
        } catch (error) {
            return res.status(400).json({msg: "Error ao criar Usuario."});
        }
    }

    async login(req, res) {
        try{
            const users = await User.findAll();
            console.log(users);
            return res.status(200).json({msg: "Usuario Logado com sucesso."});
        } catch (error) {
            return res.status(400).json({msg: "Usuario não encontrado."});
        }
    }

}

export default new AuthController;