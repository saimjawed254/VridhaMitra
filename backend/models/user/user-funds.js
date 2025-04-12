
import { mongoose } from "mongoose";
import { config } from "dotenv";

config({ path: "../../config.env" });

mongoose.connect(process.env.mongodbConnect)

const fundraiserSchema = mongoose.Schema({

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
    photo: {
        data: Buffer,
        contentType: String
    },
    qrcode: {
        data: Buffer,
        contentType: String
    },
    need: {
        type: String,
        required: true,
    },
    story:{
        type: String,
        required: true,
    },
    specificRequirement:{
        type: String,
        required: true,
    },
    duedate:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    urgency:{
        type: String,
        required: true,
    },
    upiid:{
        type: String,
        required: true,
    },
    
})

export const Fundraiser = mongoose.model("Fundraiser", fundraiserSchema)