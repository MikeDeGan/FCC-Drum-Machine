import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 81) {
      this.playSound();
    }
    if (e.keyCode === 87) {
      this.playSound();
    }
  }

  playSound() {
    console.log('playSound start');
    const sound = document.getElementById('Q');
    console.log(sound);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <header className="App-header">Drum Machine</header>
        <div id="display">
          <div id="hihat1" className="drum-pad" onClick={this.playSound}>
            Q
            <audio
              className="clip"
              id="Q"
              src={'samples/CYCdh_VinylK5-ClHat01.wav'}
            />
          </div>
          <div id="hihat2" className="drum-pad">
            W
          </div>
          <div id="hihat3" className="drum-pad">
            E
          </div>
          <div id="kick" className="drum-pad">
            A
          </div>
          <div id="snair1" className="drum-pad">
            S
          </div>
          <div id="snair2" className="drum-pad">
            D
          </div>
          <div id="tom1" className="drum-pad">
            Z
          </div>
          <div id="tom2" className="drum-pad">
            X
          </div>
          <div id="tom3" className="drum-pad">
            C
          </div>
        </div>
        <main />
      </div>
    );
  }
}

export default App;
