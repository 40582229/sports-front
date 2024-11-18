import { verifyToken } from "Methods/methods";
import HomeScreen from "../components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "../components/Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen/RegisterScreen";
import React, { useState } from "react";

const Controler = () =>{

    const [route, setRoute] = useState('login');
    const [tokenKey, setTokenKey] = useState<string>();

    if(route === 'home' ){
        return <HomeScreen setRoute={setRoute} tokenKey={tokenKey}/>
    }

    if(route === 'login' ){
        return(
            <LoginScreen setRoute={setRoute} setTokenKey={setTokenKey}></LoginScreen>
        )
    }
    if(route === 'register'){
        return <RegisterScreen setRoute={setRoute}></RegisterScreen>
    }


}

export default Controler