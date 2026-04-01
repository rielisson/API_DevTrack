import bcrypt from 'bcrypt';
import AuthModel from '../models/auth.model.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

class AuthController {
    static async signup(req, res) {
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

    static async login(req, res) {
        const { email, senha } = req.body;
        try{
            const user = await User.findOne({where: { email }});

            if(!user) {
                return res.status(401).json({msg: "Email não encontrado."});
            }

            const validaSenha = await bcrypt.compare(senha, user.senha);
            if(!validaSenha) {
                return res.status(401).json({msg: "senha ou email incorreto."});
            }

            const token = jwt.sign(
                {id: user.id},
                process.env.JWT_SECRET,
                {expiresIn: '1d'}
            )

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 86400000
            })

            return res.status(200).json({msg: "Usuario Logado com sucesso.", user: {id: user.id, email: user.email}});
        } catch (error) {
            return res.status(500).json({msg: "Erro no servidor."});
        }
    }

}

export default AuthController;