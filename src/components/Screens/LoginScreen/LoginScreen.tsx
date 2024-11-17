import React, { Dispatch, SetStateAction, useState } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleLogin } from "Methods/methods";
interface LoginScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const LoginScreen = ({setRoute}:LoginScreenProps) =>{

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (username:string, password:string) => {
    const loginResponse = await handleLogin(username, password);
    console.log(loginResponse);
    if(loginResponse['error']){
      setErrorMessage(loginResponse['error'])
    }else{
      setRoute('rokas');
    }

  }
  
  return (
    <InputForm type="register" setRoute={setRoute} handleSubmit={handleSubmit} errorMessage={errorMessage}></InputForm>
  );
}

export default LoginScreen
