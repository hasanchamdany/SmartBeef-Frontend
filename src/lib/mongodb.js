import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL

if(!MONGO_URL) {
    console.error("Invalid environment variable: MONGODB_URL")
}

export const connectToMongoDB = async () => {
    try{
        const connection = await mongoose.connect(MONGO_URL, () => {
            console.log("Mongo Connected")
        })

        if(connection.readyState === 1){
            return Promise.resolve(true)
        }
    }catch{
        return Promise.reject(error)
    }
}