import React, {createRef, useState, useEffect} from "react";
import {withAudioType} from "../../types/types";

const withAudio = (Component) => {
  const WithAudio = (props) => {
    const {isPlaying, src} = props;
    const [isLoading, updateLoading] = useState(true);
    const audioRef = createRef();

    useEffect(() => {
      audioRef.current.src = src;
      audioRef.current.oncanplaythrough = () => updateLoading(false);

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      return () => {
        audioRef.current = null;
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
