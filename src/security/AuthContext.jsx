// import React, { createContext, useEffect, useContext, useState } from "react";

// // creating context objext
// const AuthContext = createContext();

// // creating useAuth hook
// export const useAuth = () => {
//     // using useContext to get the value of the context
//     return useContext(AuthContext); 
// }

// // creating provider
// export function AuthProvider(props) {
//     // state
//     const [user, setUser] = useState(null);
//     const [isLogin, setIsLogin] = useState(false);
//     //   values to be passed to the provider
//     const value = { user, setUser, isLogin, setIsLogin };

//     // check if user is logged in using provier context
//     return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
// }

import React, {createContext, useContext, useState} from "react";

// creating context object
const AuthContext = createContext();

// creating useAuth hook
export const useAuth = () => {
    return useContext(AuthContext);
}

// creating provider
export function AuthProvider(props){
    // states
    consta [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
}