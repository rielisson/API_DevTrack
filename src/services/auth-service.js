import User from "../models/user-model.js"

export async function signupService({ name, email, password }) {
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: password
        });
        return user;
    } catch (error) {
        throw error;
    }
}