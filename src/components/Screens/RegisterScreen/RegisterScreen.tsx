import React, { Dispatch, SetStateAction } from "react";

import InputForm from "../../InputForm/InputForm";

interface RegisterScreenProps{
  setRoute:Dispatch<SetStateAction<string>>
}
const RegisterScreen = ({setRoute}:RegisterScreenProps) =>{

  return (
    <InputForm type="login" setRoute={setRoute}></InputForm>
  );
}

export default RegisterScreen
