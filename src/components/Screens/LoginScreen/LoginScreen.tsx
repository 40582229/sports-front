import React, { Dispatch, SetStateAction, useState } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleLogin } from "Methods/methods";
interface LoginScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}

const LoginScreen = ({setRoute}:LoginScreenProps) =>{

  const [message, setMessage] = useState("");

  const handleSubmit = async (username:string, password:string) => {
    const loginResponse = await handleLogin(username, password);
    console.log(loginResponse);
    if(loginResponse){
      setMessage(loginResponse)
    }/*else{
      setRoute('rokas');
    }*/

  }
  
  return (
    <InputForm type="register" setRoute={setRoute} handleSubmit={handleSubmit} message={message}></InputForm>
  );
}

export default LoginScreen
