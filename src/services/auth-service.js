import User from "../models/user-model.js"

export async function signupService({ name, email, senha }) {
    try {
        const user = await User.create({
            name: name,
            email: email,
            senha: senha
        });
        return user;
    } catch (error) {
        throw error;
    }
}