import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router'
import { Route,Routes } from 'react-router'
import { Link } from "react-router"
import Terms from "./terms"
import Userguide from './Userguide'

function Login() {
     const navigate = useNavigate()
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
     
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
      };
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions Checkbox */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                I accept the{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate("/terms")}
                >
                  Terms and Conditions</button>
                 &<button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate("/Userguide")}
                >Userguideline</button>
              </span>
            </label>
            {errors.terms && (
              <p className="text-sm text-red-600 mt-1">{errors.terms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  

    </>
  )
}

export default Login