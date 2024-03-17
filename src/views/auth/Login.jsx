import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/theshirtsquare.png"

import { login } from "../../store/utils/auth"
import { useAuthStore } from "../../store/auth"


const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState("")

  const navigate = useNavigate()

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-6 py-12 lg:px-8">
      <div className=" bg-primary rounded-md py-4 flex flex-col items-center justify-center w-[500px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-32 w-32"
              src={Logo}
              alt="theshirtsuare.com"
            />
          </Link>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-tertiary   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-tertiary hover:text-secondary" href="#">
                Forgot Password?
              </a>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white flex gap-2 items-center justify-center ">
            Don&apos;t have an account?
            <Link
              to="/auth/register"
              className="font-semibold leading-6 text-white hover:text-secondary"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login