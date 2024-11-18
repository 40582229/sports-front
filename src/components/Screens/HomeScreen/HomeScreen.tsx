import { verifyToken } from "Methods/methods";
import React, { Dispatch, SetStateAction } from "react";


interface HomeScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
    tokenKey:string
}
const HomeScreen = ({setRoute, tokenKey}:HomeScreenProps) =>{
  verifyToken(tokenKey, setRoute)

  return (
    <h1>ROKAS HOME SCREEN</h1>
  );
}

export default HomeScreen
