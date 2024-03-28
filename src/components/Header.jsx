import React from 'react';
import '../components/Header.css'





const Header = () => {
const date= new Date().toDateString()
const img ="https://picsum.photos/200/300"
const time =new Date().getHours()

let greeting
let customStyle ={color:''}


if(time<12){
    greeting = "morning"
    customStyle.color='green'
}
else if(time<18){
    greeting = "Evening"
    customStyle.color='Yellow'

}
else{
    greeting = "Night"
    customStyle.color='Blue'
}
  return (
    <div className='headSection'>
        <h1 className='head'>Today's date is {date}</h1>
        <img src={img} alt='lorem picsum'/>
        <h3 style={customStyle}>Good {greeting} India</h3>
    </div>
  )
}

export default Header