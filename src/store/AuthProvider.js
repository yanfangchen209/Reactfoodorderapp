import React, {useState, useReducer, useContext} from 'react'
import AuthContext from './auth-context'


const authReducer = (state, action) => {

    if(action.type === 'SIGNOUT'){
       return {isLoggedIn: false}
    }
    if(action.type === 'LOGIN'){
        return {isLoggedIn: true}
    }
    return state;

}
const defaultAuthState = {
    isLoggedIn: false
}


export const AuthProvider = (props) => {
    const [authState, dispatchAuthAction] = useReducer(authReducer, defaultAuthState)

    const signInHandler  = () => {
        dispatchAuthAction({type: 'LOGIN'});
    }

    const signOutHandler  = () => {
        dispatchAuthAction({type: 'SIGNOUT'});
    }

    const authContext = {
        isLoggedIn: authState.isLoggedIn,
        signIn: signInHandler,
        signOut: signOutHandler
    }

  return (
    <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
