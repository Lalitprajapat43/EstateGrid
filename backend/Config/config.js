import mongoose from "mongoose";
import "dotenv/config"


export default function Dbconfig(){
    {
        mongoose.connect(process.env.MONGODB_URI)
          .then(()=>{
        console.log("MongeDb is Connected ")
    })
    .catch((e)=>{
        console.log(e)
    })
        


    }
}