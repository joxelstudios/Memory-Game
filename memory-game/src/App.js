import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/CharacterCard'
import './components/Wrapper'
import Wrapper from './components/Wrapper';
import CharCard from './components/CharacterCard/CharCard';
import characters from './components/Char.json'
class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Wrapper>
            {this.state.characters.map(characters =>(
              <CharCard
              image = {characters.image}
              id = {characters.id}>              
              </CharCard>
            ))}
            
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
