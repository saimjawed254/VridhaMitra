
import { mongoose } from "mongoose";
import { config } from "dotenv";

config({ path: "config.env" });

mongoose.connect(process.env.mongodbConnect)

const adminUserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    mobileNumber : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    idPhoto: {
        data: Buffer,
        contentType: String
    },
    guardianMail : {
        type : String,
        required : true,
    },
    emergencyNumber : {
        type : Number,
        required : true,
    },
    emergencyAddress : {
        type : String,
        required : true,
    },
    recentLoc : {
        type : Array,
        required : true,
    },
    
})

export const AdminUser = mongoose.model("AdminUser", adminUserSchema)