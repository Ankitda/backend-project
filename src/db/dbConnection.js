import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnection = async () => {
    try {
        const DB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongo DB Connected !! Database Host : ${DB.connection.host}`);
        
    } catch (error) {
        console.error("MongoDb Connection Failed : ", error.message);
        process.exitCode = 1;
    }
}

export default DBConnection;