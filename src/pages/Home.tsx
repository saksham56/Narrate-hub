import { NavBar } from "./NavBar";
import { useParams ,useNavigate} from "react-router-dom";
import { AllBlogs } from "./AllBlogs";
import { Error } from "./ErrorPage";
export function Home(){
    const { id } = useParams()
    const navigate = useNavigate()
    if(localStorage.getItem('token')){
        return <div>
        <NavBar></NavBar>
        <br />
        <button
        onClick={()=>{
            navigate(`/blog/${id}`)
        }}
        type="button"
        className="text-white ml-20 bg-slate-800  focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >New Post</button>
        <AllBlogs></AllBlogs>
    </div>
    }else{
        return <div>
            <Error></Error>
        </div>
    }
    
}