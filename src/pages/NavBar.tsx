import { useNavigate, useParams } from "react-router-dom";
export function NavBar() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <nav className="bg-black border-gray-200 dark:bg-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => {
              navigate(`/home/${id}`);
            }}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className=" self-center text-2xl font-semibold whitespace-nowrap text-white">
              Narrate Hub
            </span>
          </button>

          <ul className="flex flex-row-reverse font-medium p-4 md:p-0  border bg-gray-950   md:mt-0 md:border-0   ">
            <li>
              <button
                onClick={() => {
                  navigate(`/signup`);
                  localStorage.removeItem("token");
                  localStorage.removeItem("userID");
                }}
                className="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent "
                aria-current="page"
              >
                Log out
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  navigate(`/home/${id}`);

                }}
                className="block py-2 px-3 mr-20 md:p-0 text-white  rounded md:bg-transparent "
                aria-current="page"
              >
                Home
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
