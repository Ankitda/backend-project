import dotenv from "dotenv"
import DBConnection from "./db/dbConnection.js";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})


DBConnection()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed : ", err);
    app.on("error", (error) => {
        console.log("error generated", error);
        throw error;
    })
})


























// created an IIFE function to connect the database as soon as this file run , this is one approach 

/*
import express from "express";
const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error generated", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listiening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR Occured", error);
        throw error;
    }   
} )();
*/