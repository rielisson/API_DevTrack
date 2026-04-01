import User from "../models/user.model.js"

class AuthService {
    async signup({email, senha}) { 
        try {
            const user = await User.create({
                email: email,
                senha: senha
            });
            return user;
        }  catch (error) {
            throw error;
        }
    }
}

export default new AuthService;