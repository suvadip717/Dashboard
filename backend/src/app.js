import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static('public'))

//routes import
import dataRouter from './routes/data.routes.js'

//routes declaration
app.use("/api/v1/data", dataRouter)

// http://localhost:3000/api/v1/data/

export {app}