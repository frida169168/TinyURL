import mongoose from "mongoose";

const usersSchema=mongoose.Schema({

    name:{
       type: String,
       require: true
    },
    
    email:{
        type: String,
        require: true
     },
});
export default mongoose.model("usersModel",usersSchema)