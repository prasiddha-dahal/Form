import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Register from "./components/Register"
import Login from "./components/Login"

const App = () => {
  const{currentUser,logout} = useContext(AuthContext)

  return (
    <div>
      {currentUser ? (
        <>
        <p>Welcome {currentUser.username}</p>
        <button onClick = {logout}>logout</button>
        </>
      ):
      (
        <>
        <Register />
        <Login />
        </>
      )}
    </div>
  )
}

export default App