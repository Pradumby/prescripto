import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white rounded-lg p-8 w-full max-w-md border">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          {isSignUp ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-500 mb-6">
          {isSignUp
            ? "Please sign up to book an appointment"
            : "Please login to book appointment"}
        </p>

        <form className="space-y-4">
          {isSignUp && (
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary transition"
          >
            {isSignUp ? "Create account" : "Login"}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8 text-start">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={toggleForm}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            {isSignUp ? "Login here" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
