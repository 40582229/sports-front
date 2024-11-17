import React, { Dispatch, SetStateAction, useState } from "react";
import Form from "react-bootstrap/Form";
import MyButton from "../MyButton/MyButton";
import './InputForm.scss'
interface InputFormProps{
    type: string,
    setRoute:Dispatch<SetStateAction<string>>,
    handleSubmit:(username:string, password:string)=>Promise<void>,
    message:Object
}

const InputForm =  ({type,setRoute , handleSubmit, message,}:InputFormProps) =>{

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
  
    
  
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
            <div className={Object.keys(message)[0]}>{message[Object.keys(message)[0]]}</div>
            <div>
            <MyButton buttonText={"SUBMIT"} handleOnClick={()=>handleSubmit(username, password)}></MyButton>
            <MyButton buttonText={type} setRoute={setRoute}></MyButton>
            </div>

          </Form>
        </div>
    );
}

export default InputForm