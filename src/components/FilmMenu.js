import '../styles/FilmMenu.css';
import Film from './Film';
import React from 'react';

const filmMenu = (props) => {
    return (
        <div className="FilmMenu">
            {props.films.map(film => {
                return (
                    <Film film={film} selectFilm={props.selectFilm}/>
                );
            })}
        </div>
    );
}

export default filmMenu;