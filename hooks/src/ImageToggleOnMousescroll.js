import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnMousescroll = ({ primary, secondary }) => {
  const imageRef = useRef();
  const [inView, setInView] = useState(false);

  const checkInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const scrollHandler = () => {
    setInView(checkInView());
  }

  useEffect(() => {
    setInView(checkInView());
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <img
      src={inView ? primary : secondary}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMousescroll;
