import React, { Dispatch, SetStateAction } from "react";

import InputForm from "../../InputForm/InputForm";
import { handleRegister } from "Methods/methods";

interface RegisterScreenProps{
  setRoute:Dispatch<SetStateAction<string>>
}
const RegisterScreen = ({setRoute}:RegisterScreenProps) =>{

  const handleSubmit = async (username:string, password:string) => {
    const registerResponse = await handleRegister(username, password);
    console.log(registerResponse);
    setRoute('rokas');
  }

  return (
    <InputForm type="login" setRoute={setRoute} handleSubmit={handleSubmit}></InputForm>
  );
}

export default RegisterScreen
