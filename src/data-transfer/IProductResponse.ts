import { IUserDTO } from "./dto";

export interface IProductResponse {
    _id: string,
    title: string,
    description?: string,
    stock: number,
    price: number,
    img?: string,
    _created_by: any,
}