import React from "react";
import Paragraph from "./Paragraph";
import TextAnimation from "./TextAnimation";
import Button from "./Button";
import BorderAnimation from "./BorderAnimation"
const HistoryPage = () => {
  const History = [
    {
      when: ["1968"],
      title: ["Beocenter 9000"],
      paragraph: [
        "Designed by Jacob Jensen, this cassette recorder, ",
        "CD player and radio was a further development of the ",
        "Beomaster 1900 by the same designer. Avantgarde not ",
        "only in its mirroring aluminium and glass surface, but in",
        "its easy touch fields of the glass panels and the hidden ",
        "when the CD or cassette tape was changed. functions ",
        "only visible.",
      ],
      imgsrc:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485220/Legacy_product_8_fhw3nt.webp",
    },
    {
      when: ["1996"],
      title: ["Beosound 9000"],
      paragraph: [
        "Designed by David Lewis, this standing version",
        "of the Beosound 9000 is a flawless example of ",
        "innovation, technology and movement in the Bang ",
        "& Olufsen legacy. The 6-CD changer is the fastest in",
        "the world. If allowed to continue its momentum it ",
        "would travel 100km/h in just 5,5 seconds, matching",
        "sport cars of today.",
      ],
      imgsrc:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485595/Legacy_product_9_zfpbxq.webp",
    },
    {
      when: ["2012"],
      title: ["Beoplay A9"],
      paragraph: [
        "Designed by Øivind Alexander Slaatto, this ",
        "perfectluy round, powerful one-point music system  ",
        "is a multiroom speaker designed like a piece of furniture.",
        "Embellished with beautiful fabric, an aluminium ring and ",
        "wooden legs, the speaker is customisable making it fit",
        "into every room.",
      ],
      imgsrc:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485237/Legacy_product_12_tseqzx.webp",
    },
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col  items-center overflow-hidden  justify-between gap-10 pb-20">
      <TextAnimation
        text={"THE HISTORY OF BANG & OLUFSEN"}
        textSize={"text-[3rem] max-xs:text-[1.2rem]  max-sm:text-[1.6rem]"}
        className={"pt-20 text-center font-['satoshi']"}
      />
      <BorderAnimation/>
      <div className="w-full h-fit gap-[10vh] max-sm:gap-10 sm:mt-[10vh]  flex flex-col px-10 max-xl:px-5">
        {History.map((item, index) => (
          <div
            key={index}
            className={`w-[100%] h-[50vh] max-xl:h-[60vh] max-sm:h-[80vh] max-md:h-screen  ${
              index === 1 ? "flex-row-reverse  md:text-end" : ""
            }  flex max-md:flex-col gap-10 justify-between`}
          >
            <div className="h-full w-[40%] max-xl:w-[55%] max-xl:h-[60%] max-md:w-full">
              <div
                className={`flex flex-col justify-between max-sm:py-5 w-full h-full`}
              >
                <div>
                  <Paragraph
                    phrases={item.when}
                    className={`text-[3rem] font-Decorative`}
                  />
                  <Paragraph
                    phrases={item.title}
                    className={`text-[2rem] opacity-60 max-xs:text-lg max-sm:text-2xl pb-3 font-primary uppercase`}
                  />
                </div>
                <Paragraph
                  phrases={item.paragraph}
                  className={`text-[1.5rem] max-2xl:text-[1.2rem] max-xl:text-[1rem]  max-xs:text-[.80rem] font-Secondary`}
                />
              </div>
            </div>
            <div className="h-full w-[35%]  max-xl:w-[45%] max-xl:h-[60%] max-md:w-full bg-[#ECEAE8] overflow-hidden">
              <img
                className={`w-full h-full max-md:object-contain object-cover ${
                  index === 1 ? "object-center" : ""
                }`}
                src={item.imgsrc}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        text={"View More"}
        customclass={` w-fit mx-auto mt-[10vh] max-sm:mt-0 bg-white border-[1px]`}
        circ={`bg-black`}
        p={`group-hover:text-white`}
      />
    </div>
  );
};

export default HistoryPage;
