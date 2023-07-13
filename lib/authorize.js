import { verifyJwt } from "./jwt";

export const authorize = (req) => {
    const token = req.headers.get('authorization');
    if (!token || !verifyJwt(token)) {
        return null;
    } else {
        return verifyJwt(token);
    }
}