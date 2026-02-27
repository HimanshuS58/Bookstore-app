import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js"


const app = express();

app.use(cors());

app.use(express.json())

app.use('/book', bookRoute);
app.use('/user', userRoute);



dotenv.config();

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{
    console.log("connected to MongoDB")
}).catch((error)=>{console.log("Error in connecting to MongoDB:", error)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})