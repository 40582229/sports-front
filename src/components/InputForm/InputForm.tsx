import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import MyButton from "../MyButton/MyButton";

interface InputFormProps{
    type: string,
}

const InputForm = ({type}:InputFormProps) =>{

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
  
    const validateForm =()=> {
      return username.length > 0 && password.length > 0;
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(username + " " + password);
    }

    return (
        <div className={type}>
          <Form onSubmit={handleSubmit}>
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
            <MyButton buttonText={type} ></MyButton>
          </Form>
        </div>
    );
}

export default InputForm