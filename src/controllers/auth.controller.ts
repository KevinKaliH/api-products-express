import {Request, Response} from 'express';
import { ILoginDTO } from '../data-transfer/dto';
import RespDTO from '../data-transfer/RespDTO';
import UserMapperMapper from '../mapper/UserMapper.mapper';
import authService from '../services/auth.service';

export const SignUp = async (req: Request, res: Response) => {
    const userDTO = UserMapperMapper.toDTO(req.body);

    try{
        let result = await authService.SignUp(userDTO, req.body.password);

        res.json(new RespDTO(true, undefined, 200, result))
    }catch(err){
        res.json(new RespDTO(undefined, err.message, 500, null))
    }
}

export const SignIn = async (req: Request, res: Response) => {
    const login = <ILoginDTO> {username: req.body.username, password: req.body.password};

    try{
        let result = await authService.SignIn(login);

        res.json(new RespDTO(true, "user sign in", 200, result))
    }catch(err){
        return res.json(new RespDTO(err.isOk, err.message, err.status, null));
    }
}