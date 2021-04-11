import React from 'react';
import Card from './Card';
import '../Styles/CardList.css'


const CardList = ({robots}) => {
  if(robots.length===0) {
    return <h1>Loading</h1>
  } 
  else {
    return (
        <div className='container'>
          { robots.map((robot,i)=>
            <Card key= {robot.id} imgID={robot.id} name={robot.name} prof={robot.address.city}/>)
          }
        </div>
    )
  }  
}

export default CardList;
