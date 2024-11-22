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

export const verifyToken = async () =>{
  const token = window.sessionStorage.getItem('token');
  if(!token)return false;
  const secret = new TextEncoder().encode(process.env.REACT_APP_SECRET);
  const alg = process.env.REACT_APP_ALG;
  try{
    const decodedToken = await jwtVerify(token,secret, {algorithms:[alg]});
    console.log(decodedToken);
    return true;
  } catch(error){
    console.error('Invalid or expired token', error.message);
    sessionStorage.removeItem('token');
    return false;
  }
}

export const setSessionToken = ( token:string)=>{
  window.sessionStorage.setItem('token', token);
}

export const handleRegister = async (username:string, password:string) =>{
  const data =  await register(username, password);

  return data;
}

export const handleLogin = async (username:string, password:string) =>{
    const data =  await login(username, password);

    return data;
}