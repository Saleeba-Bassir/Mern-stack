import React from 'react'
import { useParams } from "react-router-dom";
const Word = () => {
    const { word } = useParams();
  return (
    <div>{isNaN(+word)? "the word is : "+word:"the number is : " + word}</div>)
}

export default Word