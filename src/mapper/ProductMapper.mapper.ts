import { IProductDetail, IProductDTO } from "../data-transfer/dto";
import { IProductResponse } from '../data-transfer/IProductResponse';
import { IProduct } from "../models/product.model";

export default class ProductMapper{
    public static toDTO(data: any): IProductDTO {
        let result: IProductDTO = {
            title: data.title,
            description: data.description ?? "",
            stock: data.stock,
            price: data.price,
            img: data.img ?? "",
            _created_by: ""
        }

        return result;
    }

    public static toResponse(data: any): IProductResponse{
        let result: IProductResponse = {
            _id: data._id,
            title: data.title,
            description: data.description,
            stock: data.stock,
            price: data.price,
            img: data.img,
            _created_by: {
                _id: data._created_by._id,
                name: data._created_by.name
            }
        }

        return result;
    }

    public static toDetail(data: any): IProductDetail {
        let result: IProductDetail = {
            _id: data._id,
            title: data.title,
            description: data.description,
            stock: data.stock,
            price: data.price,
            img: data.img,
        }

        return result;
    }
}

