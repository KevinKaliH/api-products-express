import { NextFunction, Request, Response } from "express"
import RespDTO from "../data-transfer/RespDTO";
import jwt from 'jsonwebtoken'
import config from '../config'
import userRepository from "../repositories/user.repository";
import CustomError from "../data-transfer/CustomError";

export const isAuthenticate = (req: Request, res: Response, next: NextFunction) => {
    const bearearToken = req.headers.authorization;

    if(bearearToken){
        const token = bearearToken.split(' ')[1];

        jwt.verify(token, config.TOKEN_SECRET, async (err, tokenResult: any) =>{
            if(err) {
                return res.json(new RespDTO(false, "Unathorized resource", 403));
            }

            const user = await userRepository.findById(tokenResult.data.idUser);
            if(!user) return res.json(new RespDTO(false, "Not found User", 404))

            req.userToken = tokenResult.data;
            next()
        });

    }else{
        res.json(new RespDTO(false, "No token provided", 401));
    }
}

export const checkRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const canUse = roles.includes(req.userToken.roleName);

        if(!canUse){
            return res.json(new RespDTO(false, "Forbidden resource", 403))
        }

        next();
    }
}