import mongoose ,{Schema , Document, mongo} from "mongoose";
import User from "./user.model";
import { number } from "joi";

export interface ILogin extends Document {
    id:Number;
    loginToken:string;
    userId:mongoose.Schema.Types.ObjectId;
}

const LoginSchema = new Schema<ILogin>(
    {
        id:{
            type:number,
            required:true
        },
        loginToken:{
            type:String,
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
    },
    {
        timestamps:true,
    }
);

const LoginModel=mongoose.model<ILogin>("Login",LoginSchema);

export default LoginModel;

