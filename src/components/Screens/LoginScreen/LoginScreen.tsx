import React, { Dispatch, SetStateAction, useState } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleLogin, setSessionToken, verifyToken } from "Methods/methods";
interface LoginScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
    setTokenKey:Dispatch<SetStateAction<string>>
}

const LoginScreen = ({setRoute, setTokenKey}:LoginScreenProps) =>{

  const [message, setMessage] = useState("");

  const handleSubmit = async (username:string, password:string) => {
    const loginResponse = await handleLogin(username, password);
    console.log(loginResponse);
    if(loginResponse){
      setMessage(loginResponse);
      setTokenKey(Object.keys(loginResponse)[1]);
      setSessionToken(Object.keys(loginResponse)[1], loginResponse[Object.keys(loginResponse)[1]])
      setRoute('home');
    }else{
      setRoute('login');
    }

  }
  
  return (
    <InputForm type="register" setRoute={setRoute} handleSubmit={handleSubmit} message={message}></InputForm>
  );
}

export default LoginScreen
