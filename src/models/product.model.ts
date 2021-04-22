import mongoose, { Schema } from "mongoose";

export interface IProduct {
    _id?: string;
    title: string,
    description?: string,
    stock: number,
    price: number,
    img?: string,
    _created_by: string,
}

const Product = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    _created_by: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

//IUSer & mongoose.Document : con esto se refiere a que IUser es como un hijo que hereda de mongoose.document
const ProductModel = mongoose.model<IProduct & mongoose.Document>("Product", Product);
export default ProductModel;
