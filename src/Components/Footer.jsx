import React from "react";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import ShopNowBtn from "./ShopNowBtn";

const FooterData = [
  {
    Title: "Contact us",
    links: [{ name: "bangandolufsen.com" }, { name: "+852 800 906672" }],
  },
  {
    Title: "Follow us",
    links: [
      { name: "youtube", url: "https://youtube.com" },
      { name: "twitter", url: "https://twitter.com" },
      { name: "facebook", url: "https://facebook.com" },
      { name: "instagram", url: "https://instagram.com" },
      { name: "pinterest", url: "https://pinterest.com" },
    ],
  },
  {
    Title: "Products",
    links: [
      { name: "Speakers", url: "/Speakers" },
      { name: "Headphones", url: "/headphones" },
      { name: "Television", url: "/television" },
      { name: "Soundbars", url: "/soundbars" },
      { name: "World of B&O", url: "/worldb&o" },
    ],
  },
];

const services = ["Speakers", "Headphones", "Television", "World of B&O"];
const Footer = () => {
  return (
    <div>
      <div className="footer-main w-full h-[40vh] max-md:h-[30vh] flex flex-col gap-3 items-center justify-center bg-zinc-200">
        <h3 className="max-sm:text-sm text-[2rem]  text-black font-primary">
          EXPLORE THE HOUSE OF BANG & OLUFSEN
        </h3>
        <h2 className="font-Secondary text-[1.5rem] max-md:text-sm py-3 max-md:py-0 text-center text-black ">
          Join our global community for exclusive <br /> benefits and news about
        </h2>
        <Button
          text={"Join us"}
          customclass={`w-fit bg-[#000] text-white md:text-xs md:px-5 max-md:text-xs max-md:px-4 `}
          circ={"bg-white "}
          p={"group-hover:text-black"}
        />
      </div>
      <div
        className="relative h-[70vh]  bg-black "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[70vh] w-full text-black">
          <div className="w-full h-full text-white ">
            <div className="w-full h-[15%] flex justify-between items-center  px-10  ">
              <Logo />
              <ShopNowBtn text="Back to top" />
            </div>
            <div className="h-[75%] w-full items-start pt-10 flex justify-between">
              <div className="h-full font-primary w-[45%] px-10  flex flex-col gap-8">
                <h1 className="text-5xl font-Decorative max-2xl:text-4xl font-[600]  ">
                  We would love to hear from you.
                </h1>
                <h2 className="text-xl  opacity-[.7]">
                  You can also connect with us online via our social media
                  channels and our official website. We are always here to
                  assist you.
                </h2>
                <Button
                  text="Become a Partner "
                  customclass={"bg-white text-black w-fit "}
                />
                <h3 className="text-lg opacity-[.7]">
                  Don't like the forms? Drop us a line via email.
                </h3>
                <div className="w-fit">
                  <ShopNowBtn text={`bangandolufsen@hello.com`} />
                </div>
              </div>
              <div className="h-full w-[50%] flex justify-evenly ">
                {FooterData.map((item, index) => (
                  <div
                    key={index}
                    className="w-[30%] h-full  flex flex-col  gap-10 items-start "
                  >
                    <h1 className="text-xl uppercase font-Secondary">
                      {item.Title}
                    </h1>
                    <div className="flex capitalize font-primary flex-col gap-3">
                      {item.links.map((link, idx) => (
                        <ShopNowBtn
                          key={idx}
                          arrow={"false"}
                          text={link.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[10%] w-full flex justify-between   px-10 text-sm">
            
                <h2>• Privacy Policy</h2>
                <h2>&copy;2024. All rights reserved.</h2>
                <h2>Designed By THE SPIR8s</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
