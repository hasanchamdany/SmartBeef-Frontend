import React from "react";
import Link from "next/link";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

const SignInForm = () => {
    const router = useRouter();
  const { data: session } = useSession();
  console.log("session : ")
  console.log(session);
  if(!session){

      return (
        <form>
          <label className="font-poppins text-blue-dark font-bold "> Email</label>
          <input
            type="email"
            className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
            placeholder="xxx@email.com"
          ></input>
          <label className="font-poppins text-blue-dark font-bold ">
            {" "}
            Password
          </label>
          <input
            type="password"
            className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
          ></input>
          <div className="my-4 flex justify-center">
            <button
              onClick={() => signIn()}
              className="border-2 border-blue-pale hover:bg-blue-pale hover:text-white py-2 px-6 rounded-2xl "
            >
              Sign-In With Google
            </button>
          </div>
          <Link href="/signup">
            <button className="bg-blue-pale py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
              Sign-Up
            </button>
          </Link>
    
          <button className="bg-blue-medium py-2 px-4 font-poppins font-bold text-white rounded-lg hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
            Sign-In
          </button>
        </form>
      );
  } if(session){
    console.log("signed with google")
    router.push("/")
  }
};


export default SignInForm;
