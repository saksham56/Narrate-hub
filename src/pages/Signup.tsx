import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <h1 className="mb-2 text-3xl font-bold text-black  my-8">Sign Up</h1>
          <br />
          <br />
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        const response = await axios.post(
                          "https://backend.saksham1387.workers.dev/api/v1/signup",
                          {
                            name,
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
                    className="flex w-full justify-center rounded-xl hover:bg-slate-800 bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Signup
                  </button>
                </div>

                {/* <button
                  type="button"
                  className=" w-full justify-center rounded-xl text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                >
                  <svg
                    className="w-5 h-5 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  Sign up with Apple
                </button> */}
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                Already Have an account?{" "}
                <button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="font-semibold leading-6 text-black hover:text-slate-900"
                >
                  Sign In
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
