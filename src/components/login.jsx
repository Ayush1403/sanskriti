import React from "react";

const LoginSignupModal = ({ isVisible, onClose, isLoginMode }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoginMode ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Toggle between login and sign up */}
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLoginMode ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-indigo-600 hover:text-indigo-500"
                onClick={onClose}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-indigo-600 hover:text-indigo-500"
                onClick={onClose}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignupModal;
