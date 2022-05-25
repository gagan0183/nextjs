import React, { useEffect, useState } from "react";
import ImageToggleOnMousescroll from "../src/ImageToggleOnMousescroll";

const ImageChangeOnMouseScroll = () => {
  const [currentSpeakerVal, setCurrentSpeakerVal] = useState(0);

  useEffect(() => {
    window.document.title = `Speaker: ${currentSpeakerVal}`;
  }, [currentSpeakerVal]);

  return [187, 823, 1124, 1269].map((speakerId) => (
    <div key={speakerId} onMouseOver={() => {
      setCurrentSpeakerVal(speakerId);
    }}>
      <ImageToggleOnMousescroll
        primary={`static/speakers/Speaker-${speakerId}.jpg`}
        secondary={`static/speakers/bw/Speaker-${speakerId}.jpg`}
      />
    </div>
  ));
};

export default ImageChangeOnMouseScroll;
