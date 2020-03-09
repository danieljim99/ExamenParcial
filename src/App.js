import FilmMenu from './components/FilmMenu';
import FilmInfo from './components/FilmInfo';
import React, {Component} from 'react';
import films from './assets/data.json';
import './styles/App.css';

class App extends Component {
  state = {
    films: films,
    selectedFilm: null,
  };

  selectFilmHandler = (title) => {
    const films = this.state.films.slice();
    const selectedFilm = films.find(film => film.title === title);

    if(document.getElementById("FilmInfo") !== null){
      document.getElementById("FilmInfo").style.width = "700px";
      document.getElementById("FilmInfo").style.animation = "show 1.5s 1";
    }

    this.setState({selectedFilm});
  }

  goBackHandler = () => {
    document.getElementById("FilmInfo").style.width = "0px";
    document.getElementById("FilmInfo").style.animation = "hide 1.5s 1";
  }
  
  render() {
    return (
      <div className="App">
          <FilmMenu films={this.state.films} selectFilm={this.selectFilmHandler}/>
          {this.state.selectedFilm !== null ? 
            <div>
              <FilmInfo film={this.state.selectedFilm} goBack={this.goBackHandler}/>
            </div>
          :
            null
          }
      </div>
    );
  }
}

export default App;
