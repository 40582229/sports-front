
import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface MyButtonProps{
  buttonText:string,
  setRoute?:Dispatch<SetStateAction<string>>,
  handleOnClick?:MouseEventHandler<HTMLButtonElement>
}

const MyButton = ({buttonText,setRoute,handleOnClick}:MyButtonProps) => {
  const {t} = useTranslation();
  /*const fetcher = () => {
    let fetchRes = fetch("http://127.0.0.1:5000/");

    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      });
  };*/
  if(setRoute){
    return(<Button className={`${buttonText}-button`} onClick={()=>setRoute(buttonText)} >{t(buttonText)}</Button>)
  }
  return(<Button className="my-button" onClick={handleOnClick}>{t(buttonText)}</Button>)
};

export default MyButton;
