import db, { IRole } from '../models/role.model';

class RoleRepository {
    async create(newRole: IRole) {
        try{
            let result = await db.create({
                ...newRole
            })

            console.log(result);
        }catch(err){
            console.log(err);
        }
    }

    async getAll(): Promise<IRole[]>{
        try{
            let result = await db.find({});

            return result;
        }catch(err){
            console.log(err);

            throw new Error(err);
        }
    }
}

export default new RoleRepository();