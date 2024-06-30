import React from "react";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import ShopNowBtn from "./ShopNowBtn";
import { Link } from "react-router-dom";

const FooterData = [
  {
    Title: "Contact us",
    links: [{ name: "+852 800 906672" }, { name: "bangnolufsen.com" }],
  },
  {
    Title: "Follow us",
    links: [
      { name: "Youtube", url: "https://youtube.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
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

const Footer = () => {
  return (
    <div>
      <div className="footer-main w-full h-[40vh] max-md:h-[30vh] flex flex-col gap-3 items-center justify-center bg-zinc-200">
        <h3 className="max-sm:text-sm text-[2rem]  text-black font-['satoshi'] font-bold">
          EXPLORE THE HOUSE OF BANG & OLUFSEN
        </h3>
        <h2 className="font-Secondary text-[1.5rem] max-md:text-sm py-3 max-md:py-0 text-center text-black ">
          Join our global community for exclusive <br /> benefits and news about
        </h2>
        <Button
          text="Join us"
          customclass={"bg-[#FFC356] text-[#ffffffcf] w-fit "}
          circ={"bg-[#fff]"}
          p={"group-hover:text-black"}
        />
      </div>
      <div
        className="relative h-[70vh] max-md:h-[90vh] bg-black "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[70vh] max-md:h-[90vh] w-full text-black">
          <div className="w-full h-full text-white ">
            <div className="w-full h-[15%] flex justify-between font-primary items-center px-10 max-sm:pl-2 max-sm:pr-5">
              <Logo />
              <ShopNowBtn text="Back to top" />
            </div>
            <div className="h-[75%] w-full items-start  px-10 max-sm:px-5 flex max-md:flex-col max-md:gap-5 max-sm:gap-0 justify-between">
              <div className="h-full font-primary max-md:w-full w-[45%] flex flex-col max-sm:gap-4 max-md:gap-5 gap-8">
                <h1 className="text-5xl font-Decorative max-2xl:text-4xl font-[600]  ">
                  We would love to hear from you.
                </h1>
                <h2 className="text-xl max-sm:text-xs max-lg:text-base  opacity-[.7]">
                  You can also connect with us online via our social media
                  channels and our official website. We are always here to
                  assist you.
                </h2>
                <Button
                  text="Become a Partner "
                  customclass={"bg-[#FFC356] text-[#ffffffcf] w-fit "}
                  circ={"bg-[#fff]"}
                  p={"group-hover:text-black"}
                />
                <h3 className="text-lg opacity-[.7] max-sm:text-xs max-lg:text-base">
                  Don't like the forms? Drop us a line via email.
                </h3>
                <div className="w-fit">
                  <ShopNowBtn text={`bangandolufsen@hello.com`} />
                </div>
              </div>
              <div className="h-full w-[50%] max-md:pt-6 max-md:w-full flex justify-evenly ">
                {FooterData.map((item, index) => (
                  <div
                    key={index}
                    className="w-[30%] h-full flex flex-col gap-10 max-md:gap-5 items-center "
                  >
                    <h1 className="text-xl max-sm:text-sm max-lg:text-base  uppercase font-Secondary">
                      {item.Title}
                    </h1>
                    <div className="flex font-primary flex-col gap-3">
                      {item.links.map((link, idx) => (
                        <Link key={idx} to={link.url}>
                          <ShopNowBtn
                            key={idx}
                            arrow={"false"}
                            text={link.name}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[10%] w-full flex justify-between max-sm:text-xs font-primary px-10 max-sm:px-5 text-sm">
              <h2 className="max-md:hidden">Privacy Policy</h2>
              <h2>&copy; Bang & Olufsen 2024. All rights reserved.</h2>
              <h2>Designed By The SPIR8s</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
