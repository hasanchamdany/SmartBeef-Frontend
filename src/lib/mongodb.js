import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL

if(!MONGODB_URL) {
    console.error("Invalid environment variable: MONGODB_URL")
}

export const connectToMongoDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)

        if(connection.readyState === 1){
            return Promise.resolve(true)
        }
    }catch{
        return Promise.reject(error)
    }
}

// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// export default clientPromise
