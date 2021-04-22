import { Request, Response } from "express";
import routeService from '../services/role.service';

class RoleController {
    Create(req: Request, res: Response){
        routeService.Create({...req.body});

        res.send("ok creado exitosamente");
    }

    async GetAll(req: Request, res: Response){
        let result = await routeService.GetAll();

        res.status(200).json(result);
    }
}

export default new RoleController();
