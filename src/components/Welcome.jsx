import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Welcome = ({ switchToLogin }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Welcome, {currentUser.username}!
      </h2>
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
      <p className="mt-2 text-sm">
        Want to login with another account?{" "}
        <button onClick={switchToLogin} className="text-blue-500 underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Welcome;