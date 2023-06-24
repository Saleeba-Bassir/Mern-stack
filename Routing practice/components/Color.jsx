import React from 'react'
import { useParams } from "react-router-dom";
const Color = () => {
    const { word } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
  return (
    <div style={{backgroundColor:color1}}><p style={{color:color2}}>{isNaN(+word)? "the word is : "+word:"the number is : " + word}</p></div>
  )
}


export default Color