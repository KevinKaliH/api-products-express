import {Router} from 'express'
import product from './routers/products'
const router = Router();

router.use("/products", product);

export default router;