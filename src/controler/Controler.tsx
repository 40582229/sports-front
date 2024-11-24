import { verifyToken } from "Methods/methods";
import HomeScreen from "../components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "../components/Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen/RegisterScreen";
import React, { useState } from "react";

const Controler = () =>{

    const [route, setRoute] = useState('login');

    if(route === 'home' ){

        return <HomeScreen setRoute={setRoute} />
    }

    if(route === 'login' ){
        sessionStorage.removeItem('token');
        return(
            <LoginScreen setRoute={setRoute} ></LoginScreen>
        )
    }
    if(route === 'register' ){
        return <RegisterScreen setRoute={setRoute}></RegisterScreen>
    }


}

export default Controler