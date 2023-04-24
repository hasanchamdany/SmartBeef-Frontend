import React from "react";

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
          <button className="bg-blue-pale py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8">
            Sign-Up
          </button>
          <button className="bg-blue-medium py-2 px-4 font-poppins font-bold text-white rounded-lg">
            Sign-In
          </button>
        </form>
        <div className="mt-2 flex justify-center">
          <button className="border-2 border-blue-pale py-2 px-6 rounded-2xl ">
            Sign-In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default signin;
