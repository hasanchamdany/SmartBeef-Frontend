import Link from "next/link";
import React from "react";

const signup = () => {
  return (
    <div className="h-screen w-full landingPage-bg flex justify-center items-center ">
      <div className="w-lg h-lg bg-white rounded-xl px-8 py-6">
        <form>
          <label className="font-poppins text-blue-dark font-bold ">
            {" "}
            Full Name
          </label>
          <input
            type="text"
            className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
            placeholder="reinhart siregar"
          ></input>
          <label className="font-poppins text-blue-dark font-bold ">
            {" "}
            Email
          </label>
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
          <button className="bg-blue-pale py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
            Sign-Up
          </button>
          <Link href="/signin">
            <button className="bg-blue-medium py-2 px-4 font-poppins font-bold text-white rounded-lg hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
              Sign-In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default signup;
