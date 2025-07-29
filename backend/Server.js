import express from "express"
import "dotenv/config"
import cors from "cors"
import DbConfig from "./Config/config.js"
import StateRoute from "./Routes/stateRoute.js"


let app = express()

app.use(cors())
app.use(express.json())
DbConfig();

app.get("/", (req,res)=>{
    return res.json({
        "message":"Your Server is on Server.js"
    })
})

app.use("/api", StateRoute )



let PORT = process.env.PORT || 5100

app.listen(PORT, ()=>{
    console.log(`Server is Running On PORT ${PORT}`)
})