import { NavBar } from "./NavBar";
import { Blogs } from "./UserBlogs";
import { SetStateAction, useState } from "react";
import axios from "axios";
export function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [inputValuetitle, setInputValueTitle] = useState("");
  const [inputValuecontent, setInputValueContent] = useState("");
  const handleClear = () => {
    setInputValueTitle("");
    setInputValueContent("");
  };
  //For reseting the fields when you submit the blog
  const handleChangeTitle = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueTitle(e.target.value);
    setTitle(e.target.value);
  };
  const handleChangecontent = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueContent(e.target.value);
    setContent(e.target.value);
  };

  //function starts here
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-row ">
        <div className=" w-2/4  bg-slate-500 p-10 pt-36 h-screen">
          <label className="block mb-2 text-sm font-medium text-white ">
            Title
          </label>
          <input
            onChange={handleChangeTitle}
            type="text"
            value={inputValuetitle}
            className="bg-gray-50 border border-gray-300 rounded-xl text-gray-900 text-sm  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400   "
            placeholder="Your title"
            required
          />
          <br />
          <label className="block mb-2 text-sm font-medium text-white ">
            Content
          </label>
          <input
            onChange={handleChangecontent}
            type="text"
            value={inputValuecontent}
            className="bg-gray-50 border h-80 border-gray-300 rounded-xl text-gray-900 text-sm  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400   "
            required
          />
          <br />
          <button
            onClick={async () => {
              await axios.post(
                "https://backend.saksham1387.workers.dev/api/v1/blog",
                {
                  title,
                  content,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("token"),
                  },
                }
              );
              alert("Created!");
              handleClear();
            }}
            type="button"
            className="text-white bg-slate-950 hover:bg-blue-800 focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create
          </button>
        </div>
        <div>
          <br />
          <h1 className="ml-80 text-3xl">Your Blogs</h1>
          <br />
          <Blogs></Blogs>
        </div>
      </div>
    </div>
  );
}
