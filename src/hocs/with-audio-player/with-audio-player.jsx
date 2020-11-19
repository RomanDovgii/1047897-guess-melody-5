import React, {useState} from "react";
import Player from "../../components/player/player";
import withAudio from "../with-audio/with-audio";

const AudioPlayer = withAudio(Player);

const withPlayer = (Component) => {
  const WithPlayer = (props) => {
    const [activePlayerId, updateActivePlayer] = useState(0);

    return <Component
      {...props}
      renderPlayer={(src, id) => {
        return (
          <AudioPlayer
            src={src}
            isPlaying={id === activePlayerId}
            onPlayButtonClick={() => updateActivePlayer(activePlayerId === id ? -1 : id)}
          />
        );
      }}
    />;
  };

  return WithPlayer;
};

export default withPlayer;
