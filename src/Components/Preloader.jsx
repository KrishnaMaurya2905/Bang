import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LetterColumn = ({ className, letters }) => (
  <div className={` h-full w-[15%] relative overflow-hidden ${className}`}>
    <div
      className={`h-fit w-full tracking-tighter leading-none flex flex-col items-center justify-center absolute ${
        className.includes("c1") ? "bottom-0" : ""
      }`}
    >
      {letters.map((letter, index) => (
        <h1 className="text-[7vw] lg:text- " key={index}>
          {letter}
        </h1>
      ))}
    </div>
  </div>
);

const Preloader = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const b1Elements = containerRef.current.querySelectorAll(".b1 h1");
    const c1Elements = containerRef.current.querySelectorAll(".c1 h1");

    const b2Elements = containerRef2.current.querySelectorAll(".b1 h1");
    const c2Elements = containerRef2.current.querySelectorAll(".c1 h1");

    gsap.to(b1Elements, {
      y: "-500%",
      duration: 3,
    });

    gsap.to(c1Elements, {
      y: "500%",
      duration: 3,
    });

    gsap.to(b2Elements, {
      y: "-500%",
      duration: 3,
    });

    gsap.to(c2Elements, {
      y: "500%",
      duration: 3,
      onComplete:()=>{
        gsap.to([b1Elements , b2Elements , c1Elements , c2Elements],{
          opacity:0,
          duration:.6
        })
        gsap.to('.loader',{
          height:"0vh",
          delay:1,
          duration:1
        })
      }
    });
  }, []);

  const lettersData = [
    { className: "b1", letters: ["B", "B", "B", "B", "B", "B"] },
    { className: "c1", letters: ["A", "A", "A", "A", "A", "A"] },
    { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
    { className: "c1", letters: ["G", "G", "G", "G", "G", "G"] },
  ];
  const lettersData2 = [
    { className: "c1", letters: ["O", "O", "O", "O", "O", "O"] },
    { className: "b1", letters: ["L", "L", "L", "L", "L", "L"] },
    { className: "c1", letters: ["U", "U", "U", "U", "U", "U"] },
    { className: "b1", letters: ["F", "F", "F", "F", "F", "F"] },
    { className: "c1", letters: ["S", "S", "S", "S", "S", "S"] },
    { className: "b1", letters: ["E", "E", "E", "E", "E", "E"] },
    { className: "c1", letters: ["N", "N", "N", "N", "N", "N"] },
  ];
  return (
    <div className="h-screen  loader overflow-hidden fixed top-0 z-[990] bg-black w-full flex justify-center items-center font-Secondary">
      <div
        className="h-[7vw] w-[30%]    flex gap-1 text-white justify-center items-center"
        ref={containerRef}
      >
        {lettersData.map((item, index) => (
          <LetterColumn
            key={index}
            className={item.className}
            letters={item.letters}
          />
        ))}
      </div>
      <div
        className="h-[7vw] w-[35%]   flex gap-1 text-white justify-center items-center"
        ref={containerRef2}
      >
        {lettersData2.map((item, index) => (
          <LetterColumn
            key={index}
            className={item.className}
            letters={item.letters}
          />
        ))}
      </div>
    </div>
  );
  ;
};

export default Preloader;