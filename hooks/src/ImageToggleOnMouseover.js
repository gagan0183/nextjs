import React, { useRef } from "react";

const ImageToggleOnMouseover = ({ primary, secondary }) => {
  const imageRef = useRef();

  return (
    <img
      onMouseOver={(event) => (imageRef.current.src = primary)}
      onMouseLeave={(event) => (imageRef.current.src = secondary)}
      src={primary}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseover;
