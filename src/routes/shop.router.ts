import Router from 'express';
import { Create } from '../controllers/shop.controller';
import { isAuthenticate } from '../middleware/auth.middleware';

const router = Router();

router.post("/newShop", [isAuthenticate], Create);

export default router;