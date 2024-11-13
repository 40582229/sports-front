import React, { Dispatch, SetStateAction } from "react";

import InputForm from "../../InputForm/InputForm";
interface LoginScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const LoginScreen = ({setRoute}:LoginScreenProps) =>{

  return (
    <InputForm type="register" setRoute={setRoute}></InputForm>
  );
}

export default LoginScreen
