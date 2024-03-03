import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
export function Signin() {
  const navigate = useNavigate();
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  return (
    
    <div className="flex flex-row ">
      {/* the right side area */}
      <div className="text-center shadow sm:p-8 bg-black  h-screen w-2/4">
        <h1 className="mb-2 text-3xl font-bold text-white  my-80">
          Narrate Hub
        </h1>
      </div>

      {/* the signup area */}
      <div className="text-center shadow sm:p-8 bg-white  h-screen w-2/4">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-black  my-8">Sign In</h1>
          <br />
          <br />
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                      autoComplete="current-password"
                      className="block w-full rounded-xl border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                      autoComplete="current-password"
                      className="block w-full rounded-xl border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const response = await axios.post(
                        "https://backend.saksham1387.workers.dev/api/v1/signin",
                        {
                          email,
                          password,
                        }
                      );
                      console.log(response.data);
                      localStorage.setItem("token", response.data.token);
                      localStorage.setItem("userID", response.data.user.id);
                      navigate(`/home/${localStorage.getItem("userID")}`);
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                  className="flex w-full justify-center rounded-xl bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Sign in
                </button>
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                Don't Have an account?{" "}
                <button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="font-semibold leading-6 rounded-xl text-black hover:text-slate-900"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
