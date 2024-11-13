import HomeScreen from "../components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "../components/Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen/RegisterScreen";
import React, { useState } from "react";

const Controler = () =>{

    const [route, setRoute] = useState('login');

    if(route === 'login'){
        return(
            <LoginScreen setRoute={setRoute}></LoginScreen>
        )
    }
    if(route === 'register'){
        return <RegisterScreen setRoute={setRoute}></RegisterScreen>
    }

    if(route === 'rokas'){
        return <HomeScreen setRoute={setRoute}/>
    }
}

export default Controler