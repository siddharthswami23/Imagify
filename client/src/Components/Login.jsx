import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const { ShowLogin, setShowLogin } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");

  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
  };

  return (
    ShowLogin && (
      <div className="absolute top-0 left-0 bg-zinc-800/50  flex justify-center items-center w-full h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
          <img
            src={assets.cross_icon}
            alt="Close"
            className="absolute right-10 w-5 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
          
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            {state}
          </h1>
          <p className="text-center text-gray-500 mb-8">
            {state !== "Login"
              ? "Welcome! Please sign up to continue"
              : "Welcome back! Please sign in to continue "}
          </p>

          <form action="" className="space-y-6">
            {state !== "Login" && (
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <img
                  src={assets.profile_icon}
                  alt="Profile Icon"
                  className="w-6 h-6 mr-3"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            )}

            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <img
                src={assets.email_icon}
                alt="Email Icon"
                className="w-6 h-6 mr-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <img
                src={assets.lock_icon}
                alt="Lock Icon"
                className="w-6 h-6 mr-3"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
              {state === "Login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            {state === "Login" ? (
              <>
                Don't have an account?{" "}
                <span
                  className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  onClick={toggleState}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  onClick={toggleState}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    )
  );
};

export default Login;
