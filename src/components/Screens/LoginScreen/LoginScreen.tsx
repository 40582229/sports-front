import React, { Dispatch, SetStateAction } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleLogin } from "Methods/methods";
interface LoginScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const LoginScreen = ({setRoute}:LoginScreenProps) =>{

  const handleSubmit = async (username:string, password:string) => {
    const loginResponse = await handleLogin(username, password);
    console.log(loginResponse);
    setRoute('rokas');
  }
  
  return (
    <InputForm type="register" setRoute={setRoute} handleSubmit={handleSubmit}></InputForm>
  );
}

export default LoginScreen
