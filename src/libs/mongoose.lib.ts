import mongoose from 'mongoose';
import config from '../config';

export default async () => {
    try{
        await mongoose.connect(config.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log("You are connected successfully");
    }catch(err){
        console.log(err);
    }
}