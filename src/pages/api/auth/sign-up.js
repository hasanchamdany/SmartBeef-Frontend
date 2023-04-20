import { NextApiRequest, NextApiResponse } from "next"
import {hash} from "bcryptjs"
import { connectToMongoDB } from "@/lib/mongodb"
// import clientPromise from "@/lib/mongodb";
import User from "@/models/user"

const MONGODB_URL = process.env.MONGODB_URL

const handler = async (req, res) => {
    await connectToMongoDB().catch(err => res.json(err))
    // const client = await clientPromise
    console.log("connect to MongoDB")
    
    
    console.log("mongo URL = ", MONGODB_URL)

    if(req.method === "POST"){
        if(!req.body) return res.status(400).json({error: "Data is Missing"})

        const {fullName, email, password} = req.body

        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(409).json({error: "User Already exists"})
        }else{
            if(password.length < 6) return res.status(409).json({error: "Password too short, should be 6 characters long"})

            const hashedPassword = await hash(password, 12)
            console.log("CP sblm user create")
            try{
                const user = await User.create({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: hashedPassword
                }, (error, data) => {
                    if(error && error instanceof mongoose.Error.ValidationError){
                        for(let field in error.errors){
                            const msg = error.errors[field].message
                            return res.status(409).json({error: msg})
                        }
                    }
                    res.status(201).json({data})
                })
                
            }catch(error){
                console.error("Error creating user", error)
            }
            // await User.create({
            //     fullName,
            //     email,
            //     password: hashedPassword 
            // }, (error, data) => {
            //     if(error && error instanceof mongoose.Error.ValidationError){
            //         for(let field in error.erros){
            //             const msg = error.errors[field].message
            //             return res.status(409).json({error: msg})
            //         }
            //     }

            //     const user = {
            //         email: data.email,
            //         fullName: data.fullName,
            //         _id: data._id
            //     }

            //     res.status(201).json({
            //         success: true,
            //         user
            //     })
            // })

            // return res.status(201).json({
            //     success: true,
            //     user
            // })
        }

    }else{
        res.status(405).json({error: "Mehod Now Allowed"})
    }
}

export default handler