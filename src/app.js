import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin : process.env.CORS_ORIGIN,
        optionsSuccessStatus : 200,

    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// importing user routes
import userRouter from "./routes/user.routes.js";

// linking user routes
app.use("/api/v1/user",userRouter)

export { app }