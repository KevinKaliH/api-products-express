import {Router} from 'express';
const router = Router();
import productService from '../../services/product';

router.get("/", (req, res)=> {
    return res.send("products route");
})

router.post("/create", (req, res): void => {
    
    let serviceProduct = new productService();

    serviceProduct.create();
    res.send("cawdads")
});

export default router;
