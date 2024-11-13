import React, { Dispatch, SetStateAction } from "react";


interface HomeScreenProps{
    setRoute:Dispatch<SetStateAction<string>>
}
const HomeScreen = ({setRoute}:HomeScreenProps) =>{

  return (
    <h1>ROKAS HOME SCREEN</h1>
  );
}

export default HomeScreen
