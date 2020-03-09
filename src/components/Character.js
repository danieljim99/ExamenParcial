import '../styles/Character.css';
import React from 'react';

const character = (props) => {
    return (
        <div className="Character">
            <img className="CharacterImage" src={props.character.image} alt={props.character.name}/>
            <div className="CharacterText">
                <div className="CharacterName">{props.character.name}</div>
                <div className="CharacterActor">{props.character.actor}</div>
                {props.character.quote ? <div><i>"{props.character.quote}"</i></div> : null}
            </div>
        </div>
    );
}

export default character;