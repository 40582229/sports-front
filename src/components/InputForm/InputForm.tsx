import React, { Dispatch, SetStateAction, useState } from "react";
import {handleLogin} from '../../../src/Methods/methods'
import Form from "react-bootstrap/Form";
import MyButton from "../MyButton/MyButton";
import './InputForm.scss'
interface InputFormProps{
    type: string,
    setRoute:Dispatch<SetStateAction<string>>
}

const InputForm =  ({type, setRoute}:InputFormProps) =>{

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
  
    const [errorMessage, setErrorMessage] = useState("")
    const validateForm =()=> {
      return username.length > 0 && password.length > 0;
    }
  
    const handleSubmit = async () => {
      const loginResponse = await handleLogin(username, password);
      console.log(loginResponse);
      if(loginResponse['error']){
        setErrorMessage(loginResponse['error'])
      }else{
        setRoute(loginResponse[1]);
      }
      
    }

    return (
        <div className={type}>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
    
              <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
    
            <Form.Group  controlId="password">
              <Form.Label>Password</Form.Label>
    
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="error"> {errorMessage}</div>
            <div>
            <MyButton buttonText={"SUBMIT"} handleOnClick={handleSubmit}></MyButton>
            <MyButton buttonText={type} setRoute={setRoute}></MyButton>
            </div>

          </Form>
        </div>
    );
}

export default InputForm