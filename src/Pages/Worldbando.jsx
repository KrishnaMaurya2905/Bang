import React, { useMemo, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
import ShopLanding from "../Components/ShopLanding";
import BorderAnimation from "../Components/BorderAnimation"
const Worldbando = () => {
  const ShopLandingdata = {
    Img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719490878/Lifestyle_-_Sounds_Like_Home_-_Malene_and_Nikolaj_-_BOHOLIDAYS_09357_-_1000x1000px_afkdnr.webp",
    Title: "The Art of Sound",
    Para: "Explore Bang & Olufsen, where technology meets timeless design. This Danish brand offers iconic speakers, headphones, and TVs, blending performance and elegance.",
    shopQue:"Iconic Quality Since 1925",
    shopCompare:
      "Since 1925 Bang & Olufsen has created iconic audio and home entertainment products to the highest standards of sound, craft and design.",
  };

  return (
    <div className="">
      <ShopLanding bg={"bg-[#E4E4E7]"} ShopLandingdata={ShopLandingdata} />
      <WorldofBandO />
      <Footer />
    </div>
  );
};

export default Worldbando;

const WorldofBandO = () => {
  const WorldofBandOdata = useMemo(
    () => [
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484205/WoB1_ffydph.webp",
        Title: "RECREATED CLASSICS",
        Description: "Bringing the past into the future",
        para: "We have always created products that can stand the test of time. Our Recreated Classics Programme takes our commitment to longevity even further. Join us in celebrating the revival of physical media, where cherished classics meet modern innovation",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484204/WoB2_camgbv.webp",
        Title: "KRESTEN BJORN KRAB_BJERRE, CREATIVE DIRECTOR",
        Description: "Design Stories",
        para: "“We don't work from technology. We always work from the idea.”Creative Director of Design, Kresten Bjørn Krab-Bjerre, tells us how human experience always guides the development of new Bang & Olufsen products.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484205/WoB3_uxnt0q.webp",
        Title: "FINN NORGAARD KLINT, POLISHING SPECIALIST",
        Description: "Craft Stories",
        para: "The work has become more refined,” says polishing specialist Finn Nørgaard Klint. As one of our expert craftspeople, Finn’s expertise ensures the high level of finish that makes Bang & Olufsen products so tactile.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484206/WoB4_c8xyb9.webp",
        Title: "BEOLAB 90",
        Description: "A Vision of Sound",
        para: "Listen to our head Tonmeister, Geoff Martin, and product designer, André Poulheim, talk about reimagining the way that speakers work. We’ve pushed the boundaries further than ever before, allowing us to create the ultimate speaker. Introducing the Beolab 90, a vision of sound.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484205/WoB5_zmkmbz.webp",
        Title: "LIVE FROM THE 10TH ARRONDISSEMENT",
        Description: "Sounds of Paris",
        para: "Music in its wildest form. Crafted on the spot. Right in front of you. Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris. Four groundbreaking artists. 60 minutes of yet-to-be-heard music. ",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484209/WoB6_unbfdy.webp",
        Title: "BANG & OLUFSEN AND AS MONACO",
        Description: 'Bringing the "Sound of Monaco" to life',
        para: "After this first year of fruitful collaboration, it was natural to continue the adventure together. As we celebrate the centenary of the club in a few months, we are delighted to share this occasion with the support of a partner with whom we share the same quest for excellence in our respective fields.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484206/WoB7_gwv6pm.webp",
        Title: "AT MILIAN FERRARI FLAGSHIP STORE",
        Description: "Celebrating the launch of the ferrari Collection",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.  ",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484206/WoB8_mr3nps.webp",
        Title: "AT THE MAYFAIR FLAGSHIP STORE",
        Description: "Celebrating the launch of Mayfair Flagship",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484209/WoB9_ezca6a.webp",
        Title: "INTERVIEW WITH CAROLINE WOZNIACKI",
        Description: "From her new home in Miami",
        para: "We caught up with our brand ambassador Caroline about upcoming projects, her brand new home in the exclusive Fisher Island neighbourhood in Miami, and how she balances family and professional life following her successful tennis career.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484267/WoB10_wkc8um.webp",
        Title: "SINCE 1925",
        Description: "Crafting Memories",
        para: "Over the past 95 years, we have built products that embody the principles of iconic, classic and timeless design, craftsmanship and tech. It’s what defined us back when we started, and it’s what drives us towards the future.",
      },
      {
        Image:
          "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719484211/WoB11_tqfwrp.webp",
        Title: "THE BEOSYSTEMS",
        Description: "Timeless, for 50 years and counting",
        para: "Bang & Olufsen is expanding its Recreated Classics Program with the launch of Beosystems – a limited edition music system that transcends time by bridging the gap between one of our iconic designs from 1972 and today’s cutting-edge digital technology. ",
      },
    ],
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleImagesLoaded = () => {
      const img = gsap.utils.toArray(".col1 img");
      const textContents = gsap.utils.toArray(".col2");

      textContents.forEach((item) => {
        const paragraph = item.querySelector(".paragraph span");
        const title = item.querySelector(".title span");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: "top 40%",
            scrub: 1.5,
          },
        });
        tl.from(title, { y: 50, opacity: 0, duration: 1.5 }).from(
          paragraph,
          { y: 50, opacity: 0, duration: 1.5 },
          "-=1"
        );
      });

      img.forEach((item) => {
        gsap.set(item, {
          clipPath: "polygon(0 0, .1% 0, .1% .1%, 0 .1%)",
          opacity: 1,
        });
        gsap.to(item, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "0% 80%",
            end: "0 40%",
            scrub: 3,
          },
        });
      });
    };

    const images = document.querySelectorAll(".col1 img");
    let loadedCount = 0;
    images.forEach((img) => {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          handleImagesLoaded();
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wofbando-container  w-full bg-[#ffffff] p-[2%] flex flex-col max-sm:gap-14 gap-20 ">
      {WorldofBandOdata.map((item, index) => (
        <div
          key={index}
          className={`row flex w-full h-full  max-md:flex-col-reverse max-md:gap-5 ${
            index % 2 === 1 ? "flex-row-reverse " : ""
          }`}
        >
          <div className="col1 w-[50%] max-sm:w-[100%] h-fit">
            <img
              className="w-full  max-sm:h-[45vh] max-h-[65vh] max-sm:w-full object-cover"
              src={item.Image}
              alt={item.Title}
            />
            <h1 className="font-primary pt-2 opacity-75 max-sm:text-sm">
              {item.Title}
            </h1>
          </div>
          <div className="col2 w-[50%] max-sm:h-[30vh] max-sm:w-full">
            <div className="w-full h-full  flex flex-col justify-center max-md:items-start items-center gap-10 max-lg:gap-5">
              <p className="title font-primary py-1 h-fit overflow-hidden max-lg:text-lg text-3xl">
                <span className="inline-block w-full h-full">
                  {item.Description}
                </span>
              </p>
              <p className="paragraph text-[1.5rem] font-Secondary h-fit overflow-hidden w-[80%] max-lg:text-base leading-tight">
                <span className="inline-block w-full h-full">{item.para}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-[5vh]"></div>
    </div>
  );
};
