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

      switch (true) {
        case isPlaying && !isLoading:
          audio.play();
          break;

        case !isPlaying && !isLoading:
          audio.pause();
          break;
      }

      return () => {
        audio.oncanplaythrough = null;
      };
    }, [isPlaying, isLoading]);

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
