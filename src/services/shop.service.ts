import { IProductShopDTO } from "../data-transfer/dto";
import productRepository from "../repositories/product.repository";
import nodemailer from 'nodemailer';
import userRepository from "../repositories/user.repository";
import CustomError from "../data-transfer/CustomError";
import { VirtualType } from "mongoose";
import config from '../config'

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.CORREO_NODEMAILER,
        pass: config.PASSWORD_NODEMAILER
    }
});

class ProductService {
    async Create(products: IProductShopDTO[]): Promise<boolean> {

        products.forEach(async (item) => {
            await productRepository.UpdateProduct(item._id, item.quantity);
        })

        return true;
    }

    async SendEmail(id: string, products: IProductShopDTO[]) {

        let user = await userRepository.findById(id);

        if (!user) {
            throw new CustomError({ message: "user not found", status: 404 })
        }

        let message = await this.SetMessage(products);

        var mailOptions = {
            from: 'ingresarcorreo@yahoo.es',
            to: user.username,
            subject: 'compra',
            html: message
        };

        let info = await transporter.sendMail(mailOptions);
        if (info) {
            console.log(info);
        } else {
            throw new CustomError({ message: "sorry can't send message", status: 500 })
        }
    }

    async SetMessage(products: IProductShopDTO[]): Promise<string> {
        var list = "<ol>";
        let total = 0;

        let result = products.map(async (item) => {
            let product = await productRepository.GetById(item._id);
            let subtotal = product.price*item.quantity;

            let line = "Product: "+ product.title + ", buyed:" + item.quantity + ", Price: "+product.price+", Subtotal: "+subtotal;

            list += `<li>${line}</li>`;

            total+=subtotal;

        })

        await Promise.all(result);

        list += "</ol>";

        let message = `<h1>This is your proforma sale</h1> ${list}<br><h3>Your total is: ${total}</h3>`;

        return message;
    }
}

export default new ProductService();
