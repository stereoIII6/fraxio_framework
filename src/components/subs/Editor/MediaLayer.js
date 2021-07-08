import React from "react";
import { useSpring, animated } from "react-spring";

const MediaLayer = () => {
  const sups = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return <animated.div style={sups}>I will fade in</animated.div>;
};
export default MediaLayer();
