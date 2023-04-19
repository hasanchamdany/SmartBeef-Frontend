import { NextApiRequest, NextApiResponse } from "next"
import {hash} from "bcryptjs"
import { connectToMongoDB } from "@/lib/mongodb"
import User from "@/models/user"

const handler = async (req, res) => {
    try{
        connectToMongoDB().catch(err => res.json(err))
    }catch{
        console.log(err)
    }
    

    if(req.method === "POST"){
        if(!req.body) return res.status(400).json({error: "Data is Missing"})

        const {fullName, email, password} = req.body

        const userExists = await  User.findOne({email})

        if(userExists){
            return res.status(409).json({error: "User Already exists"})
        }else{
            if(password.length < 6) return res.status(409).json({error: "Password too short, should be 6 characters long"})

            const hashedPassword = await hash(password, 12)

            User.create({
                fullName,
                email,
                password: hashedPassword 
            }, (error, data) => {
                if(error && error instanceof mongoose.Error.ValidationError){
                    for(let field in error.erros){
                        const msg = error.errors[field].message
                        return res.status(409).json({error: msg})
                    }
                }

                const user = {
                    email: data.email,
                    fullName: data.fullName,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    user
                })
            })
        }

    }else{
        res.status(405).json({error: "Mehod Now Allowed"})
    }
}

export default handler