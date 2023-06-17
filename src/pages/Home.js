import React from 'react'
import  Health from "../components/Health";
import  Fitness from "../components/Fitness";
import "../style.css"
function Home(){
  return (
    <div className="home"> 
    <div className="container">
    <Health/>
    </div></div>
  )
}

export default Home