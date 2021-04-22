import { IRoleDTO } from "./dto";

export interface IUserResponse {
    _id?: string;
    name?: string;
    username?: string;
    _role?: IRoleDTO;
}