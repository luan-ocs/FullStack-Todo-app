import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"


import listRouter from "./routes/lists.js"
dotenv.config();

const app = express();

app.use(bodyParser.json({extended: true, limit: "30mb"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use("/lists", listRouter)

app.get("/", (req, res) => {
    res.send("Hello from to-do API")
})


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => app.listen(process.env.PORT || 5000, () => console.log(`server running on port ${process.env.PORT || 5000}`))
).catch((error) => console.log(error.message))
