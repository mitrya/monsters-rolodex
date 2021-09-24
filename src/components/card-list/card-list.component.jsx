import React from "react";
import './card-list.styles.css';
import '../card.component/card.component.jsx';
import { Card } from "../card.component/card.component.jsx";

export const Cardlist = props =>(
    <div className="card-list"> 
     {props.monsters.map(monster =>(
     <Card key={monster.id} monster={monster}/>
     ))}
    </div>
);