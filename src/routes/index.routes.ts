import Router from 'express';
import AuthRouter from './auth.router';
import RoleRouter from './role.router';
import ProductRouter from './products.router';

const router = Router;

export default ()=>{
    const app = Router();
    app.use("/auth", AuthRouter);
    app.use("/role", RoleRouter);
    app.use("/products", ProductRouter)

    return app;
}