import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { Navigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();

    const [form, setForm] = useState({
    email: "",
    password: "",
  });

 const [loading, setLoading] = useState(false);


  const token = localStorage.getItem("token");

if (token) {
  return <Navigate to="/dashboard" replace />;
}


 
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await authService.login(
        form.email,
        form.password
      );

      alert(res.message);

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08111F]">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-[#101B2D] p-8 shadow-xl"
      >

        <h1 className="mb-8 text-center text-4xl font-black text-white">
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-sky-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-sky-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-sky-500 py-4 font-bold text-white transition hover:bg-sky-600 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default Login;