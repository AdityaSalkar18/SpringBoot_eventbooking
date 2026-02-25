import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "adityasalkar1806@gmail.com" && password === "Aditya@1806") {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-700">Admin Login</h5>
            <p className="text-gray-500 text-sm mb-6">
              Only admin can access this page. Please login to continue.
            </p>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Admin Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="admin@example.com"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div
                className="p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">Login failed!</span> Invalid email
                or password. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
            >
              Admin Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
