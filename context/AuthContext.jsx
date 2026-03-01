import js from "@eslint/js";
import { createContext, useDebugValue, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [currentUser , setCurrentUser] = useState(null);

    //loading saved users and saved current user form the local storage
    useEffect(() => {
        const savedUsers = localStorage.getItem("users");
        const savedCurrentUser = localStorage.getItem("currenUser");

        if(savedUsers) setUsers(JSON.parse(savedUsers));
        if(savedCurrentUser) setUsers(JSON.parse(savedCurrentUser));
    
    }, [])
    
    //saving users to local storage
    useEffect(() => {
        localStorage.setItem("users",JSON.stringify(users));
    }, [users]);

    //saving currentUsers to local storage
    useEffect(() => {
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
    }, [currentUser]);

    //register function 
    const register = (username,password) => {
        const newUser = {
            id : users.length + 1,
            username,
            password
        }

        setUsers(prev => [...prev,newUser]);
    }

    //login function 
    const login = (username,password) => {
        const foundUser = users.find(
            user => user.username === username && user.password === password
        );

        if(foundUser){
            setCurrentUser(foundUser);
            return true;
        }else{
            return false;
        }
    }

    //logut function 
    const logout = () =>{
        setCurrentUser(null);
    }


    return(
            <AuthContext.Provider value = {{users,login,logout,register,currentUser}}>
                {children}
            </AuthContext.Provider>
    )
}