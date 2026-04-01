import jwt from 'jsonwebtoken';

export default function verifiesAcess(req, res, next) {
    const token = req.cookies.token;
    if (!token) { // verifica se tem token.
        return res.status(401).json({ message: "Denied access, missing token." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(404).json({ msg: "Invalido ou token expirado." })
    }
}