import { authorize } from "./authorize"

export const admin = (req) =>  {
    const auth = authorize(req);
    if (!auth || auth.role !== 'admin') {
        return null;
    } else {
        return auth;
    }
}