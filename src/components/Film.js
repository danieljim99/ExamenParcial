import '../styles/Film.css';
import React from 'react';

const film = (props) => {
    return (
        <div className="Film" onClick={props.selectFilm.bind(this, props.film.title)}>
            <img className="FilmImage" src={props.film.image} alt={props.film.title}/>
            <div className="FilmTitle">{props.film.title}</div>
            <div className="FilmEpisode">Episode: {props.film.episode_id}</div>
        </div>
    );
}

export default film;