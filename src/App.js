import React, { Component } from 'react';
import './App.scss';
import KeyPad from './KeyPad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumName: '',
      keyInfo: [
        {
          keyName: 'Q',
          keyNum: 81,
          keyID: 'hihat',
          keySource: 'samples/CYCdh_VinylK5-ClHat01.wav'
        },
        {
          keyName: 'W',
          keyNum: 87,
          keyID: 'hihat2',
          keySource: 'samples/CYCdh_VinylK5-ClHat02.wav'
        },
        {
          keyName: 'E',
          keyNum: 69,
          keyID: 'hihat3',
          keySource: 'samples/CYCdh_VinylK5-ClHat03.wav'
        },
        {
          keyName: 'A',
          keyNum: 65,
          keyID: 'kick',
          keySource: 'samples/CYCdh_VinylK5-Kick01.wav'
        },
        {
          keyName: 'S',
          keyNum: 83,
          keyID: 'snair1',
          keySource: 'samples/CYCdh_VinylK5-Snr01.wav'
        },
        {
          keyName: 'D',
          keyNum: 68,
          keyID: 'snair2',
          keySource: 'samples/CYCdh_VinylK5-Snr02.wav'
        },
        {
          keyName: 'Z',
          keyNum: 90,
          keyID: 'tom1',
          keySource: 'samples/CYCdh_VinylK5-Tom01.wav'
        },
        {
          keyName: 'X',
          keyNum: 88,
          keyID: 'tom2',
          keySource: 'samples/CYCdh_VinylK5-Tom02.wav'
        },
        {
          keyName: 'C',
          keyNum: 67,
          keyID: 'tom3',
          keySource: 'samples/CYCdh_VinylK5-Tom03.wav'
        }
      ]
    };

    this.setDrumName = this.setDrumName.bind(this);
  }

  setDrumName(d) {
    this.setState({ drumName: d });
  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <header className="App-header">Drum Machine</header>
        <main>
          <div id="display">
            <h1>{this.state.drumName}</h1>
            {this.state.keyInfo.map(keyProps => (
              <KeyPad
                key={keyProps.keyID}
                keyName={keyProps.keyName}
                keyNum={keyProps.keyNum}
                keyID={keyProps.keyID}
                keySource={keyProps.keySource}
                setDrum={this.setDrumName}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
