import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("token", "my-demo-token");

    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground w-full">
      <div className="w-full max-w-sm rounded-lg border p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <button
          onClick={handleLogin}
          className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Login
        </button>
      </div>
    </div>
  );
}
