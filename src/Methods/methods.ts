import { jwtVerify } from "jose";
import { Dispatch, SetStateAction } from "react";

const login = async (username: string, password: string) => {
  let fetchRes = await fetch(`${process.env.REACT_APP_API_LINK}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  const data = await fetchRes.json();

  //console.log(data);
  return data;
};

const register = async (username: string, password: string) => {
  let fetchRes = await fetch(`${process.env.REACT_APP_API_LINK}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  const data = await fetchRes.json();

  //console.log(data);
  return data;
};

const addExcersise = async (excersise: any) =>{
  let fetchRes = await fetch(`${process.env.REACT_APP_API_LINK}excersise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ excersise: excersise, token: window.sessionStorage.getItem("token") }),
  });

  const data = await fetchRes.json();

  //console.log(data);
  return data;
}

const getExcersise = async () =>{
  let fetchRes = await fetch(`${process.env.REACT_APP_API_LINK}getExcersise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token: window.sessionStorage.getItem("token") }),
  });

  const data = await fetchRes.json();

  //console.log(data);
  return data;
}

export const verifyToken = async (
  setRoute?: React.Dispatch<React.SetStateAction<string>>
) => {
  const token = window.sessionStorage.getItem("token");
  if (!token) return false;
  const secret = new TextEncoder().encode(process.env.REACT_APP_SECRET);
  const alg = process.env.REACT_APP_ALG;
  try {
    const decodedToken = await jwtVerify(token, secret, { algorithms: [alg] });
    console.log(decodedToken);
    return true;
  } catch (error) {
    if (setRoute) {
      setRoute("login");
    }
    //console.error('Invalid or expired token', error.message);
    sessionStorage.removeItem("token");
    return false;
  }
};

export const setSessionToken = (token: string) => {
  window.sessionStorage.setItem("token", token);
};

export const handleGetExcersise = async () =>{
  const data = await getExcersise();

  return data;
}

export const handleExcersise = async (excersise: any) =>{
  const data = await addExcersise(excersise);

  return data;
}

export const handleRegister = async (username: string, password: string) => {
  const data = await register(username, password);

  return data;
};

export const handleLogin = async (username: string, password: string) => {
  const data = await login(username, password);

  return data;
};
