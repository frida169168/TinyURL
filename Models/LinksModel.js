import mongoose from "mongoose";

const linksSchema=mongoose.Schema({

    originalURL:{
       type: String,
       require: true
    }
});
export default mongoose.model("linksModel",linksSchema)