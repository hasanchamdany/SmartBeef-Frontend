// import { compare } from 'bcryptjs'
// import NextAuth, { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { connectToMongoDB } from '../../../lib/mongodb'
// import User from '../../../models/user'
// import { IUser } from '../../../types'

// const options: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             id: "credentials",
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials) {
//                 await connectToMongoDB().catch(err => { throw new Error(err) })

//                 const user = await User.findOne({
//                     email: credentials?.email
//                 }).select("+password")

//                 if (!user) {
//                     throw new Error("Invalid credentials")
//                 }

//                 const isPasswordCorrect = await compare(credentials!.password, user.password)

//                 if (!isPasswordCorrect) {
//                     throw new Error("Invalid credentials")
//                 }

//                 return user
//             }
//         })
//     ],
//     pages: {
//         signIn: "/login"
//     },
//     session: {
//         strategy: "jwt"
//     },
//     callbacks: {
//         jwt: async ({ token, user }) => {
//             user && (token.user = user)
//             return token
//         },
//         session: async ({ session, token }) => {
//             const user = token.user as IUser
//             session.user = user

//             return session
//         }
//     }
// }

// export default NextAuth(options)


import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
})