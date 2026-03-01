import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ switchToRegister }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) alert("Invalid credentials");
  };

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />
        <button type="submit" className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Login
        </button>
      </form>
      <p className="mt-2 text-sm">
        Don't have an account?{" "}
        <button onClick={switchToRegister} className="text-blue-500 underline">
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;