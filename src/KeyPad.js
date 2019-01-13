import React from 'react';
import PropTypes from 'prop-types';

const keyStyleUp = {
  marginTop: '5px',
  marginLeft: '5px',
  boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.75)'
};

const keyStyleDown = {
  marginTop: '8px',
  marginLeft: '8px',
  boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.75)'
};

class KeyPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyStyle: { keyStyleUp }
    };

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setKeyStyle = this.setKeyStyle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  setKeyStyle() {
    this.state.keyStyle.marginLeft === '8px'
      ? this.setState({ keyStyle: keyStyleUp })
      : this.setState({ keyStyle: keyStyleDown });
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
    this.setKeyStyle();
    setTimeout(() => this.setKeyStyle(), 100);
  }

  render() {
    return (
      <div
        id={this.props.keyID}
        className="drum-pad"
        onClick={this.playSound}
        style={this.state.keyStyle}
      >
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
