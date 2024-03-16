import React from 'react'
import { useState } from 'react';
import Output from '../Output';
function Greeting() {
    const[changeText,setChangeText]= useState(false)
    const textChangeHandler =()=>{
        setChangeText(true)
    }
  return (
    <>
      <h1>HELLO WORLD!</h1>
      {!changeText && <Output>good to see you</Output>}
      {changeText && <Output>Changed</Output>}
      <button onClick={textChangeHandler}>Click Me!</button>
    </>
  );
}

export default Greeting