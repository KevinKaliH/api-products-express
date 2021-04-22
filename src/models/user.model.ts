import mongoose, { Schema } from "mongoose";

export interface IUser {
    _id?: string;
    name: string;
    password: string;
    username: string;
    _role: string;
}

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    _role: {
        type: Schema.Types.ObjectId,
        ref: "Role"
    },
})

//IUSer & mongoose.Document : con esto se refiere a que IUser es como un hijo que hereda de mongoose.document
const UserModel = mongoose.model<IUser & mongoose.Document>("User", User);
export default UserModel;
