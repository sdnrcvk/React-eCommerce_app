import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({component:Component,...rest}) {
    const {user}=useAuth();

    return <Route {...rest} 
        render={(props)=>{
            if(user){
                return <Component {...props}/>
            }
        return <Redirect to={{pathname:"/"}}/>
    }}
    />
}

export default ProtectedRoute