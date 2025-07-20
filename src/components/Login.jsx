import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function Login() {
  const [email, setEmail] = useState("kspsagar02@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);




  const dispatch = useDispatch();
  
  const navigate = useNavigate() //login k bad kha redirect krna h ye btayega
  const user  = useSelector((store) =>store.user)
  const handleLogin = async () => {


     setIsLoading(true); // ✅ Show loader
    try {
      const res = await axios.post("http://localhost:7777/login", {
        email,
        password,
      },
      {withCredentials:true}
    
      
    );console.log(res?.data);
    dispatch(addUser(res.data));
    
    if (res.status === 200) {
      toast.success("Login You In please wait!", { autoClose: 2000 });

      setTimeout(() => {
        navigate("/feed");
      }, 2500);
    }
  } catch (err) {
    toast.error("Login failed. Check your credentials.");
    console.log(err);
  }finally {
    setIsLoading(false); // ✅ Hide loader
  }
};

  

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 ">
      <div className="bg-white dark:bg-base-100 shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="text-right text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot password?
          </div>

         <button
  type="button"
  className="btn btn-primary w-full mt-4 flex justify-center items-center gap-2"
  onClick={handleLogin}
  disabled={isLoading}
>
  {isLoading && <span className="loading loading-spinner loading-sm"></span>}
  {isLoading ? "Logging in..." : "Login"}
</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
