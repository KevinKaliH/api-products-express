import mongoose, { Schema } from 'mongoose';

export interface IRole{
    _id?: string;
    name: string;
}

const Role = new Schema({
    name: {
        type: String,
        required: true,
    }
});

const RoleModel = mongoose.model<IRole & mongoose.Document>('Role', Role);

export default RoleModel;