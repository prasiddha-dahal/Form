import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Register from "./components/Register"
import Login from "./components/Login"
import Welcome from "./components/Welcome";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [showRegister, setShowRegister] = useState(true); // toggle between login/register

  if (currentUser) return <Welcome switchToLogin={() => setShowRegister(false)} />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      {showRegister ? (
        <>
          <Register />
          <p className="mt-2 text-sm">
            Already have an account?{" "}
            <button onClick={() => setShowRegister(false)} className="text-blue-500 underline">
              Login
            </button>
          </p>
        </>
      ) : (
        <Login switchToRegister={() => setShowRegister(true)} />
      )}
    </div>
  );
};

export default App;