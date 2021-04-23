import db, { IProduct } from '../models/product.model';
import CustomError from '../data-transfer/CustomError'

class ProductRepository {
    async Create(product: IProduct) {
        try{
            let result = await db.create({
                ...product
            });

            result = await result.populate("_created_by", "_id name").execPopulate();

            return result;
        }catch(err){
            console.log(err);

            throw new CustomError({message: "Error server, creating product", status: 500});
        }
    }

    async GetAll(){
        try{
            let result = await db.find({});

            return result;
        }catch(err){
            console.log((err));

            throw new CustomError({message: "Error server, getting all product", status: 500});
        }
    }

    async GetAllByCreator(id: string) {
        try{
            let result = await db.find({_created_by: id});

            return result;
        }catch(err){
            console.log((err));

            throw new CustomError({message: "Error server, getting all product", status: 500});
        }
    }

    async UpdateProduct(id: string, stock: number): Promise<boolean> {
        try{
            let temp = await db.findById(id);
            
            if(!temp){
                throw new CustomError({message: "Product not found", status: 404})
            }
    
            temp.stock -= stock;
            await temp.save();
            return true;
        }catch(err){
            console.log("error while update product");
            
            throw new CustomError({message: err.message, status: 500});
        }
    }

    async GetById(id: string){
        try{
            let temp = await db.findById(id);
            
            if(!temp){
                throw new CustomError({message: "Product not found", status: 404})
            }
    
            return temp;
        }catch(err){
            console.log("error while get product by id");
            
            throw new CustomError({message: err.message, status: 500});
        }
    }
}

export default new ProductRepository();
