import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    const {register} = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    register(username,password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className = "bg-white w-80 p-6 rounded-xl shadow-md">
      <p className="text-3xl font-bold text-center mb-4">Form</p>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <label htmlFor="username" className = "text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="border px-4"
          />

          <label htmlFor="password" className = "text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
           
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4"
          />

          <button type = "Submit" className = "bg-blue-500 text-white py-2 rounded-md px-1 hover:bg-blue-600 transition duration-200">submit</button>
        </form>

        <p className = "m-3">total no of users : <span className = "text-xl font-bold">{users.length}</span></p>
        {users.map(user => <p key={user.id} className = "text-sm font-semibold text-gray-500">{user.newUsername}</p>)}

      </div>
    </div>
  );
};

export default Register;
