import { Request, Response } from "express";
import RespDTO from '../data-transfer/RespDTO';
import shopService from "../services/shop.service";

export const Create = async (req: Request, res: Response) => {

    const userToken = req.userToken.idUser;
    const listPdto = req.body;

    try{
        let result = await shopService.Create(listPdto);


        

        shopService.SendEmail(userToken, listPdto);
        
        res.json(new RespDTO(true, "Sold succesfully", 200, result));
    }catch(err){
        res.json(new RespDTO(false, err.message, err.status));
    }
}
