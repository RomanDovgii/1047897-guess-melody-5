import React, {createRef, useState, useEffect} from "react";
import {withAudioType} from "../../types/types";

const withAudio = (Component) => {
  const WithAudio = (props) => {
    const {isPlaying, src} = props;
    const [isLoading, updateLoading] = useState(true);
    const audioRef = createRef();

    useEffect(() => {
      const audio = audioRef.current;
      audio.src = src;
      audio.oncanplaythrough = () => updateLoading(false);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.oncanplaythrough = null;
      };
    }, [isPlaying]);

    return (
      <Component
        {...props}
        isLoading={isLoading}
      >
        <audio
          ref={audioRef}
        />
      </Component>
    );
  };

  WithAudio.propTypes = withAudioType;

  return WithAudio;
};

export default withAudio;
