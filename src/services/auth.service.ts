import { ILoginDTO, IToken, ITokenDTO, IUserDTO } from "../data-transfer/dto";
import {encryptPassword, comparePasswod} from '../utils/bcrypt.util'
import userRepository from '../repositories/user.repository';
import { IUserResponse } from "../data-transfer/IUserResponse";
import UserMapper from "../mapper/UserMapper.mapper";
import { createToken } from "../utils/jwt.utils";
import CustomError from "../data-transfer/CustomError";
import config from '../config';

class AuthService{

    async SignIn(login: ILoginDTO): Promise<ITokenDTO>{
        let user = await userRepository.getByUsername(login.username);

        if(!user){
            throw new CustomError({message: "username doesn't exist", status: 400});
        }

        let passwordValid = await comparePasswod(user.password, login.password);

        if(passwordValid){
            let result: IToken = {
                idUser: user._id,
                username: user.username,
                roleName: user._role.name
            }

            const token = createToken(result);
            return <ITokenDTO>{
                token_type: "Bearear",
                access_token: token,
                expires_in: config.TOKEN_EXPIRE
            };
        }else{
            throw new CustomError({message: "password isn't correct", status: 400});
        }
    }

    async SignUp(user: IUserDTO, password: string): Promise<IUserResponse>{
        let found = await userRepository.findByUsername(user.username)

        if(found!=null){
            throw new CustomError({message: "username is exist", status: 400})
        }

        let passwordHash = await encryptPassword(password);
        let result = await userRepository.create({...user, password: passwordHash});

        return UserMapper.toResponse(result);
    }
}

export default new AuthService();
