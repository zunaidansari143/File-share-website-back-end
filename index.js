import express from "express";
import router from "./routes/route.js";
import cors from "cors"
import mongoose from "mongoose";

const app=express();
app.use(cors())


app.use('/',router)

const PORT=8081;



app.listen(PORT, async () =>{
    const  url = 'type mongodb url'
    try{
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log(`server is runing on port ${PORT} with database`);
        // console.log(`server is runing on port ${PORT} '
    } catch(err){
        console.log("somthing went worrng" , err.message);
    }
} );

// console.log("hii");