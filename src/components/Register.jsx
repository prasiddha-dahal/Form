import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password); 
    setUsername("");
    setPassword("");
  };

  return (
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
      <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default Register;