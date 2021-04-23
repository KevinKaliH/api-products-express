import Router, { Request, Response } from 'express';
import { Create, GetAll, GetAllByCreator, UpdateStock } from '../controllers/product.controller';
import { checkRole, isAuthenticate } from '../middleware/auth.middleware';

const router = Router();

router.get("/all", GetAll);

router.post("/create", [isAuthenticate, checkRole(["admin", "writer"])], Create);

router.get("/getMyProducts", [isAuthenticate, checkRole(["admin", "writer"])], GetAllByCreator);

router.put("/:id", [isAuthenticate, checkRole(["admin","writer","anonymous"])], UpdateStock);

export default router;