import React from "react";
import {PlayerType} from "../../types/types";

const Player = (props) => {
  const {isLoading, onPlayButtonClick, isPlaying, children} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        {children}
      </div>
    </React.Fragment>
  );
};

Player.propTypes = PlayerType;

export default Player;
