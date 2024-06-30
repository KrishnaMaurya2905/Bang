import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = React.memo(({ text, textSize, className }) => {
  const textRef = useRef();

  useEffect(() => {
    const splitText = new SplitTextJS(textRef.current);
    const chars = splitText.chars;
    chars.forEach(char => {
      char.style.willChange = 'transform';
    });

    const animation = gsap.fromTo(
      chars,
      { y: 100 },
      {
        y: 0,
        stagger: 0.015,
        duration: 0.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "top 20%",
          markers: false,
        },
      }
    );

    return () => {
      animation.kill();
      chars.forEach(char => {
        char.style.willChange = '';
      });
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className={`${textSize} w-full text-center leading-none overflow-hidden ${className}`}
    >
      {text}
    </h1>
  );
});

export default TextAnimation;
