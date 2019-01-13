import React from 'react';

import PropTypes from 'prop-types';

class KeyPad extends React.Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyNum) {
      this.playSound();
    }
  }

  playSound() {
    this.props.setDrum(this.props.keyID);
    const sound = document.getElementById(this.props.keyName);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    return (
      <div id={this.props.keyID} className="drum-pad" onClick={this.playSound}>
        {this.props.keyName}
        <audio
          className="clip"
          id={this.props.keyName}
          src={this.props.keySource}
        />
      </div>
    );
  }
}

KeyPad.propTypes = {
  keyName: PropTypes.string.isRequired,
  keyNum: PropTypes.number.isRequired,
  keyID: PropTypes.string.isRequired,
  keySource: PropTypes.string.isRequired,
  setDrum: PropTypes.func.isRequired
};

export default KeyPad;
