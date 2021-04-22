import { IRoleDTO, IUserDTO } from "../data-transfer/dto";
import { IUserResponse } from "../data-transfer/IUserResponse";
import { IUser } from "../models/user.model";

class UserMapper{
    public static toDTO(data: any): IUserDTO{
        let result: IUserDTO = {
            name: data.name,
            username: data.username,
            _role: data._role,
        }

        return result;
    }

    public static toResponse(data: any): IUserResponse {
        let result = <IUserResponse>{
            _id: data._id,
            name: data.name,
            username: data.username,
            _role: <IRoleDTO>{
                _id: data._role._id,
                name: data._role.name
            }
        }

        return result;
    }

    public static toDomain(data: IUserDTO): IUser{
        let result: IUser = {
            ...data,
            password: "",
        }

        return result;
    }

    // public static toDomain (raw: any): T;
    // public static toDTO (t: T): DTO;
    // public static toPersistence (t: T): any;
}

export default UserMapper;