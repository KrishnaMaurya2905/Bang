

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

const ShopNowBtn = React.memo(({ text , arrow }) => {
  const { contextSafe } = useGSAP();
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = contextSafe(() => {
      gsap.to(h1Ref1.current, { y: "-100%" });
      gsap.to(h1Ref2.current, { y: "-100%" });
      gsap.fromTo(
        borderRef.current,
        { width: "0%", left: "0%" },
        { width: "100%", ease: "power2.out", duration: 0.7 }
      );
    });
    const handleMouseLeave = contextSafe(() => {
      gsap.to(h1Ref1.current, { y: "0%" });
      gsap.to(h1Ref2.current, { y: "0%" });
      gsap.fromTo(
        borderRef.current,
        { width: "100%", left: "0%" },
        { width: "0%", left: "100%", ease: "power2.out" }
      );
    });

    const button = borderRef.current.parentElement;
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [contextSafe]);

  return (
    <div className="button w-fit relative overflow-hidden">
      <div className="h-[1.5rem] text-[1rem] max-sm:text-[.9rem] overflow-hidden">
        <h1 ref={h1Ref1} className={`flex items-center gap-2 max-sm:gap-1`}>
          {text ? text : "Shop Now "} {arrow === "false" ? "" : <MdArrowOutward />}
        </h1>
        <h1 ref={h1Ref2} className={`flex items-center gap-2 max-sm:gap-1`}>
          {text ? text : "Shop Now "} {arrow === "false" ? "" : <MdArrowOutward />}
        </h1>
      </div>
      <div
        ref={borderRef}
        className={`absolute bottom-0 left-0 h-[1px] w-[0] bg-white`}
      ></div>
    </div>
  );
});

export default ShopNowBtn;
