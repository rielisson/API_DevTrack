import bcrypt from 'bcrypt';
import { signupService } from '../services/auth-service.js';
import User from '../models/user-model.js';
import jwt from 'jsonwebtoken';

export async function signup(req, res) {
    try {
        let { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "Nome, email ou senha são obrigatórios."});
        }
        const saltRounds = 10;
        let hashPassword = await bcrypt.hash(password, saltRounds);
        let createUser = await signupService({ name, email, password: hashPassword });
        res.status(201).json({ msg: "Usuario criado com sucesso.", user: {name: name, email: email}});
    } catch (error) {
        return res.status(400).json({ msg: "Error ao criar Usuario." });
    }
}

export async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ msg: "Email não encontrado." });
        }

        const validatesPassword = await bcrypt.compare(password, user.password);
        if (!validatesPassword) {
            return res.status(401).json({ msg: "senha ou email incorreto." });
        }
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400000
        })
        return res.status(200).json({ msg: "Usuario Logado com sucesso.", user: { id: user.id ,email: user.email, name: user.name } });
    } catch (error) {
        return res.status(500).json({ msg: "Erro no servidor"});
    }
}
