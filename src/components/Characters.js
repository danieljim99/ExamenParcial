import Character from './Character';
import '../styles/Characters.css';
import React from 'react';

const characters = (props) => {
    return (
        <div className="Characters">
            {props.characters.map(character => {
                return (
                    <Character character={character}/>
                );
            })}
        </div>
    );
}

export default characters;