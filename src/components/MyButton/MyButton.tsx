import React from "react";
import { Button } from "react-bootstrap";

interface MyButtonProps{
  buttonText:string,

}

const MyButton = ({buttonText}:MyButtonProps) => {
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

  return(<Button type="submit" >{buttonText}</Button>)
};

export default MyButton;
