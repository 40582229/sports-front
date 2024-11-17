import React, { Dispatch, SetStateAction, useState } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleRegister } from "Methods/methods";

interface RegisterScreenProps{
  setRoute:Dispatch<SetStateAction<string>>
}
const RegisterScreen = ({setRoute}:RegisterScreenProps) =>{

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (username:string, password:string) => {
    const registerResponse = await handleRegister(username, password);
    console.log(registerResponse);
    if(registerResponse['error']){
      setErrorMessage(registerResponse['error'])
    }else{
      setRoute('rokas');
    }

  }

  return (
    <InputForm type="login" setRoute={setRoute} handleSubmit={handleSubmit} errorMessage={errorMessage}></InputForm>
  );
}

export default RegisterScreen
