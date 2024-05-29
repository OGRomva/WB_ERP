import * as process from "process";

export const getJwtSecret = () => {
    // return 'secretword';
    return process.env.SECRET_KEY
}