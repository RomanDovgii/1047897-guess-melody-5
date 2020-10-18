import React, {createRef, PureComponent} from "react";
import {audioPlayerType} from "../types/types";

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false
    });
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
  }

  render() {
    const {isLoading} = this.state;
    const {onPlayButtonClick, isPlaying} = this.props;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick}
        />
        <div className="track__status">
          <audio
            autoPlay={isPlaying}
            ref={this._audioRef}
          />
        </div>
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = audioPlayerType;
