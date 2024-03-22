import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token , setToken] = useState(localStorage.getItem("token"))
    const [user , setUser] = useState("")
    const [services , setServices] = useState([]);
   

    
    
    const storeTokenLS = (serverToken)=>{
        return localStorage.setItem("token" , serverToken);
    }

    let isLoggedIn = !!token ;

    //tackling the logout functionality

    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    // JWT Authentication - to get currently logged in user data

    const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://127.0.0.1:5000/api/auth/user" , 
            {
                method :"GET" , 
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            if (response.ok){
                const data = await response.json();
                console.log(data.userData);
                setUser(data.userData);
                

            }
        } catch (error) {
            console.log(`Authentication error in fetching user data ${error}`)
        }
    }
//Fetching data from backend


    const getServices = async() =>{
        try {
            const response = await fetch("http://127.0.0.1:5000/api/data/service",
            {
            method: "GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(` services frontend error :${error}`)
        }
    }

    useEffect(()=>{
        getServices(); //fetch the data from backend related in database
        userAuthentication();
    } , []);

    return (
        <AuthContext.Provider value={{ isLoggedIn , storeTokenLS , LogoutUser , user , services}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);

    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}
