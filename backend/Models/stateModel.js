import mongoose from "mongoose";


const StateSchema = new mongoose.Schema({
    StatePoster:{
        type:"String",
        required:true
    },
         StateName:{
        type:"String",
        required:true
    },
      StateCode:{
        type:"String",
        required:true
    },
         Country:{
        type:"String",
        required:true
    },
         StateCity:{
        type:"String",
        required:true
    }
 

})

export default mongoose.model("StateModel", StateSchema)