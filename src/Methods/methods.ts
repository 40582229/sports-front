import { jwtVerify } from "jose";
import { Dispatch, SetStateAction } from "react";

const  login = async (username:string, password:string) =>{
    let fetchRes = await fetch("http://127.0.0.1:5000/login",{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password})
      });

      const data = await fetchRes.json();

      //console.log(data);
    return data 
}

const  register = async (username:string, password:string) =>{
  let fetchRes = await fetch("http://127.0.0.1:5000/register",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:username, password:password})
    });

    const data = await fetchRes.json();

    //console.log(data);
  return data 
}

export const verifyToken = async (tokenKey:string, setRoute:Dispatch<SetStateAction<string>>) =>{
  const token = window.sessionStorage.getItem(tokenKey);
  const secret = new TextEncoder().encode(process.env.REACT_APP_SECRET);
  const alg = process.env.REACT_APP_ALG;
  try{
    const decodedToken = await jwtVerify(token,secret, {algorithms:[alg]})
    console.log(decodedToken)
  } catch(error){
    setRoute('login')
    console.error('Invalid or expired token', error.message)
    
  }
}

export const setSessionToken = (tokenKey:string, token:string)=>{
  window.sessionStorage.setItem(tokenKey, token);
}

export const handleRegister = async (username:string, password:string) =>{
  const data =  await register(username, password);

  return data;
}

export const handleLogin = async (username:string, password:string) =>{
    const data =  await login(username, password);

    return data;
}