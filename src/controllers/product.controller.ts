import { Request, Response } from "express";
import RespDTO from '../data-transfer/RespDTO';
import productService from '../services/product.service'
import ProductMapper from '../mapper/ProductMapper.mapper';

export const Create = async (req: Request, res: Response) => {
    try{
        let product = ProductMapper.toDTO(req.body);
        product._created_by = req.userToken.idUser;

        let inserted = await productService.Insert(product);

        res.json(new RespDTO(true, "Inserted succesfully", 200, inserted));
    }catch(err){
        res.json(new RespDTO(false, err.message, err.status));
    }
}

export const GetAll = async (req: Request, res: Response) => {
    try{
        let result  = await productService.GetAll();
        res.json(new RespDTO(true, "Showing data", 200, result));
    }catch(err){
        res.json(new RespDTO(false, err.message, err.status));
    }
}

export const GetAllByCreator = async (req: Request, res: Response) => {

    const idCreator = req.userToken.idUser;

    try{
        let result = await productService.GetAllByCreator(idCreator);

        res.json(new RespDTO(true, "Showing data", 200, result))
    }catch(err){
        res.json(new RespDTO(false, err.message, err.status));
    }
}

export const UpdateStock = async (req: Request, res: Response) => {
    const id = req.params.id;
    const stock = req.body.stock;

    try{
        let result = await productService.UpdateStock(id, stock);

        res.json(new RespDTO(true, "result", 200))
    }catch(err){
        res.json(new RespDTO(false, err.message, err.status))
    }
}