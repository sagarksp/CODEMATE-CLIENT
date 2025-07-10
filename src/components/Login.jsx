export default function Login() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white dark:bg-base-100 shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Welcome Back 👋</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="text-right text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot password?
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <span className="text-blue-500 hover:underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
