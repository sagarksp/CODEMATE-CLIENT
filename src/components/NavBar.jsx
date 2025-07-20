import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // ✅ Don't render protected routes without user
  useEffect(() => {
    if (!user?.firstName && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [user, location.pathname, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:7777/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user?.firstName) return(
    <div className="navbar min-h-20 bg-cyan-600 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-stone-950">🤝CODEMATE🤝</a>
      </div>
      </div>
  ) ; // ⛔ Prevent NavBar render until user is available

  return (
    <div className="navbar min-h-20 bg-cyan-600 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-stone-950">🤝CODEMATE🤝</a>
      </div>

      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="profile" src={user.photourl} />
            </div>
            <p className="text-white">
              {user.firstName[0]}
              {user.lastName[0]}
            </p>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <button onClick={() => navigate("/profile")}>
                Profile <span className="badge">New</span>
              </button>
            </li>
            <li><a>Settings</a></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
