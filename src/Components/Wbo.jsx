import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import Button from "./Button";
const slider1 = [
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484214/WoB16_lzjnak.webp", title: "SPEAKERS TO SUIT YOUR SPACE" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484212/WoB13_dss780.webp", title: "Charles Leclerc x Bang & Olufsen" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484267/WoB10_wkc8um.webp", title: "THE BEOSYSTEMS" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484209/WoB9_ezca6a.webp", title: "INTERVIEW WITH CAROLINE WOZNIACKI" },
];

const slider2 = [
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484213/WoB15_vdweyo.webp", title: "PERSONALISATION AT YOUR FINGERTIPS" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484205/WoB1_ffydph.webp", title: "RECREATED CLASSICS" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484214/WoB17_zwkcoj.webp", title: "THE DESIGNERS OF BEOSOUND A5" },
  { img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719484205/WoB5_zmkmbz.webp", title: "LIVE FROM THE 10TH ARRONDISSEMENT" },
];

export default function Wbo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div className="bg-white h-[150vh] max-md:h-[110vh] w-full overflow-hidden">
      <TextAnimation
        text={"Explore the World of B & O"}
        className={`text-[3.5rem] max-md:text-[1.8rem] pt-[10vh] max-sm:text-[1.5rem] font-['satoshi'] uppercase`}
      />
      <div
        ref={container}
        className={`flex flex-col gap-[15vh] max-md:gap-[8vh] relative mt-[15vh] bg-white z-[1]`}
      >
        <motion.div
          style={{ x: x1 }}
          className={`flex relative gap-[3vw] w-[120vw] left-[-10vw] max-md:left-[-30vw]`}
        >
          {slider1.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[25%] h-[40vh] max-md:h-[30vh] max-md:w-[35%] flex-shrink-0 flex flex-col items-start  justify-center`}
              >
                <div className={`w-full h-full overflow-hidden`}>
                  <img
                    alt={"image"}
                    className="object-cover hover:scale-[1.2] duration-300 h-full w-full"
                    src={item.img}
                  />
                </div>
                <h1 className="text-md uppercase py-1 max-md:text-xs font-primary">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className={`flex  gap-[3vw] w-[120vw] left-[-10vw]`}
        >
          {slider2.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[25%] h-[40vh]  max-md:h-[30vh] max-md:w-[35%] flex-shrink-0 flex flex-col items-start justify-center`}
              >
                <div className={`w-full h-full overflow-hidden`}>
                  <img
                    alt={"image"}
                    className="object-cover hover:scale-[1.2] duration-300 h-full w-full"
                    src={item.img}
                  />
                </div>
                <h1 className="text-md uppercase py-1 max-md:text-xs font-primary">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Button
        text={"View More"}
        customclass={` w-fit mx-auto mt-[10vh] max-sm:mt-[5vh] bg-white border-[1px]`}
        circ={`bg-black`}
        p={`group-hover:text-white`}
      />
    </div>
  );
}
