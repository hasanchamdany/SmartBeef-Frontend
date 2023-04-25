import React from "react";
import Link from "next/link";

const signin = () => {
  return (
    <div className="h-screen w-full landingPage-bg flex justify-center items-center ">
      <div className="w-lg h-lg bg-white rounded-xl px-8 py-6">
        <form>
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
          <div className="my-4 flex justify-center">
            <button className="border-2 border-blue-pale hover:bg-blue-pale hover:text-white py-2 px-6 rounded-2xl ">
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
      </div>
    </div>
  );
};

export default signin;
