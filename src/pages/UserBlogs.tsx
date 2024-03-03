import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogsSkeleton1 from "./BlogsSkeleton1";
export function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  console.log(id);
  useEffect(() => {
    const fetchBlogs = async () => {
      const intervalId = setInterval(async () => {
        // Your code to execute at the specified interval goes here
        console.log("Executing function at interval");
        try {
          const response = await axios.get(
            `https://backend.saksham1387.workers.dev/api/v1/blog/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data.res);
          setBlogs(response.data.res);
          setloading(false);
        } catch (error) {
          console.error("Error fetching blogs:", error);
          // Handle error, e.g., set an error state or display a message to the user
        }
        return () => {
          clearInterval(intervalId);
        };
      }, 2000);
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return (
      <div>
        <BlogsSkeleton1></BlogsSkeleton1>
        <BlogsSkeleton1></BlogsSkeleton1>
        <BlogsSkeleton1></BlogsSkeleton1>
        <BlogsSkeleton1></BlogsSkeleton1>
        <BlogsSkeleton1></BlogsSkeleton1>
        <BlogsSkeleton1></BlogsSkeleton1>
      </div>
    );
  } else {
    return (
      <div>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="ml-24 p-6 border-b-[1px]  w-full mb-4  text-wrap"
          >
            <Link to={`/signup`}>
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <br />
              <div className="text-lg font-serif">
                {blog.content.substring(0, 50) + "..."}
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
