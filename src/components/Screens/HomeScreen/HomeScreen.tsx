import { verifyToken } from "Methods/methods";
import React, { Dispatch, SetStateAction, useEffect } from "react";


interface HomeScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const HomeScreen = ({setRoute}:HomeScreenProps) =>{

  

  return (
    <h1>ROKAS HOME SCREEN</h1>
  );
}

export default HomeScreen
