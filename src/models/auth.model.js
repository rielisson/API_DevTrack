import User from "./user.model.js";

class AuthModel {
    async signup({email, senha}) { 
        try {
            console.log(email, senha);
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

export default new AuthModel;