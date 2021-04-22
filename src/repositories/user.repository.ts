import CustomError from '../data-transfer/CustomError';
import db, { IUser } from '../models/user.model';

const findByUsername = async (username: string) => {
    let result = null;
    try{
        result = await db.findOne({'username': username});

    }catch(err){
        throw new CustomError({message: err.message, status: 500});
    }

    return result ?? null;
}

const getByUsername = async (username: string): Promise<any> => {
    let result = null;
    try{
        result = await db.findOne({'username': username}).populate("_role", "_id name");

        return result;
    }catch(err){
        throw new CustomError({message: err.message, status: 500});
    }
}

const findById = async (id: string) => {
    try{
        let result = await db.findById(id);

        return result;
    }catch(err){
        throw new CustomError({message: "Error server while trying to find user by id", status: 500});
    }
}

const create = async (user: IUser) => {
    try{
        let result = await db.create({
            ...user,
        })
        result = await result.populate("_role", "_id name").execPopulate();

        return result;
    }catch(err){
        console.log(err);
        throw new CustomError({message: err.message, status: 500});
    }
}

export default {
    findByUsername,
    create,
    getByUsername,
    findById
}