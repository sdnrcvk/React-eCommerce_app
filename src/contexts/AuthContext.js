import { Flex, Spinner } from "@chakra-ui/react";
import { useState, createContext, useEffect, useContext } from "react";
import { fetchLogin, fetchLogout, fetchMe } from "../api";

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [loggedIn,setLoggedIn]=useState(false);
    const {loading, setLoading}=useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const me=await fetchLogin();

                setLoggedIn(true);
                setUser(me);
                setLoading(false);

                console.log("me", me);

            } catch (e) {
                
            }
        })()
    },[]);

    const login=(data)=>{
        setLoggedIn(true);
        setUser(data);

        localStorage.setItem("access-token",data.access_token);
        localStorage.setItem("access-token",data.refresh_token)
    };

    const logout=async(callback)=>{
        setLoggedIn(false);
        setUser(null);
        await fetchLogout();
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')

        callback();
    }

    const values={
        loggedIn,
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