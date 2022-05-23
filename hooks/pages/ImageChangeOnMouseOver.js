import React from "react";
import ImageToggleOnMouseover from "../src/ImageToggleOnMouseover";

const ImageChangeOnMouseOver = () => {
    return (
      <div>
        <ImageToggleOnMouseover
          primary="static/speakers/Speaker-823.jpg"
          secondary="static/speakers/bw/Speaker-823.jpg"
        />
      </div>
    );
}

export default ImageChangeOnMouseOver;