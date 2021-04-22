import bcrypt from 'bcrypt';
import config from '../config';

export const encryptPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, config.SALT_BCRYPT);
}

export const comparePasswod = async (passwordDB: string, passwordUser: string) => {
    return await bcrypt.compare(passwordUser, passwordDB);
}

