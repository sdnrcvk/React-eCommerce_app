import { Flex, Spinner } from "@chakra-ui/react";
import { useState, createContext, useEffect, useContext } from "react";
import { fetchProfile } from "../api";

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const {loading, setLoading}=useState(true)

    const login=async(data)=>{

        localStorage.setItem("access-token",data.access_token);
        localStorage.setItem("refresh-token",data.refresh_token)


        const me=await fetchProfile(data.access_token);
        setUser(me);

        localStorage.setItem("user", JSON.stringify(me));
        
    };

    const logout=async(callback)=>{
        setUser(null);

        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        localStorage.removeItem('user')

        callback();
    }

    const values={
        user,
        login,
        logout,
    };

    if(loading){
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner 
                    thickness="4px" 
                    speed="0.65s" 
                    emptyColor="gray.200" 
                    size="xl" 
                    colorScheme="red.500" />
            </Flex>
        )
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

};

const useAuth=()=>useContext(AuthContext);

export {AuthProvider, useAuth};