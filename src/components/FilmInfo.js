import Characters from './Characters';
import '../styles/FilmInfo.css';
import React from 'react';

const filmInfo = (props) => {
    let result = null;

    if(props.film.characters){
        result = (
            <div id="FilmInfo" className="FilmInfo">
                <img className="GoBack" src="https://www.kindpng.com/picc/m/80-805814_x-button-svg-png-red-x-circle-icon.png" alt="Go back" onClick={props.goBack.bind(this)}/>
                <div className="FilmData">
                    <img className="FilmInfoImage" src={props.film.image} alt={props.film.title}/>
                    <div className="FilmText">
                        <div><b>Title: </b>{props.film.title}</div>
                        <div><b>Episode: </b>{props.film.episode_id}</div>
                        <div><b>Release: </b>{props.film.release_date}</div>
                        <div><b>Beginning: </b>{props.film.opening_crawl}</div>
                    </div>
                </div>
                <Characters characters={props.film.characters}/>
            </div>
        );
    } else {
        result = (
            <div id="FilmInfo" className="FilmInfo">
                <img className="GoBack" src="https://www.kindpng.com/picc/m/80-805814_x-button-svg-png-red-x-circle-icon.png" alt="Go back" onClick={props.goBack.bind(this)}/>
                <img className="ThisIsNotTheImage" src="https://cf.geekdo-images.com/camo/3bd257105ee45a87f586c848ff13a15e52ef8e6b/687474703a2f2f7777772e6a6173656d6363617274792e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031322f30372f6f626977616e2d6172656e7474686564726f6964732e6a7067" alt="This is not the film you are looking for"/>
                <div className="ThisIsNotTheText"><b>This is not the film you are looking for</b></div>
            </div>
        );
    }       
        
    return result;
}

export default filmInfo;