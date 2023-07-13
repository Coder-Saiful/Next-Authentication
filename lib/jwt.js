import jwt from "jsonwebtoken";

export const signJwtAccessToken = (payload) => { 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRE_TIME});
    return token;
}

export const verifyJwt = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}