import jwt from 'jsonwebtoken';
import { IToken } from '../data-transfer/dto';
import config from '../config'

export const createToken = (dataToken: IToken): string => {
    try{
        return jwt.sign({ data: dataToken, token_type: "Bearer" }, config.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: config.TOKEN_EXPIRE });
    }catch(err){
        throw new Error(err);
    }
}