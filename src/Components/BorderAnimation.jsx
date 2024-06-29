import React from 'react';
import { useInView } from 'react-intersection-observer';

const BorderAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`relative bg-white w-full flex items-center justify-center h-[2vh]`}>
      <div className={`absolute h-[1px] ${inView ? 'animate-expand-left' : ''} left-1/2 top-1/2 bg-[#0000009a]`}></div>
      <div className={`absolute h-[1px] ${inView ? 'animate-expand-right' : ''} right-1/2 top-1/2 bg-[#0000009a]`}></div>
    </div>
  );
};

export default BorderAnimation;
