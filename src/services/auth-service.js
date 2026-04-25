import User from "../models/user-model.js"

export async function signupService({ email, senha }) {
    try {
        const user = await User.create({
            email: email,
            senha: senha
        });
        return user;
    } catch (error) {
        throw error;
    }
}