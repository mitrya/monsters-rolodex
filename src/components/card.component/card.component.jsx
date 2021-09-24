import React from "react";
import '../card.component/card.styles.css';



export const Card = props =>(
    
    
     
    <div className="card-container">
      
    <img alt="monster" src={`https://github.com/mitrya/monster-images/blob/main/${props.monster.id}.jpg?raw=true`} width="170px" height="170px"/>

     {/* 
        <img alt = "robots"
        src = { `https://robohash.org/set=set2/${props.monster.id}?50x50` }
        width="200px" height="200px" />
     */}
    <div> {props.monster.name} </div>
     </div>
     

);