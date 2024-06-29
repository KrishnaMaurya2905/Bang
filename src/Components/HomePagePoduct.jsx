import React, { useMemo } from "react";
import ShopNowBtn from "../Components/ShopNowBtn";
import { Link } from "react-router-dom";
import Button from "./Button";
const HomePagePoduct = () => {
  const HomePageProductData = useMemo(
    () => [
      {
        img1: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483132/hp11_tbo0ia.jpg",
        img2: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp12_osyk6o.jpg",
        imgTitle: "BEOPLAY H95",
        imgDes: "Premium over-ear headphones",
        route: "/headphones",
      },
      {
        img1: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp21_sqfwby.jpg",
        img2: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp22_gf775e.webp",
        imgTitle: "BEOSOUND A1 EX",
        imgDes: "Portable Bluetooth speaker",
        route: "/speakers",
      },
      {
        img1: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp31_nmhoti.webp",
        img2: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp32_xyuswg.webp",
        imgTitle: "BALENCIAGA I BANG",
        imgDes: "Haute Couture HI-FI",
        route: "/speakers",
      },
    ],
    [] // Dependency array is empty since data doesn't change
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-50 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-['satoshi']">
          Where Innovation Meets Luxury
        </h1>
        <p className="max-w-2xl leading-6 text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 font-Secondary">
          Experience the pinnacle of sound and design with Bang & Olufsen. Our
          ethos is rooted in delivering unmatched craftsmanship, exceptional
          sound quality, and timeless design.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button text={'Explore Products'} customclass={`text-white bg-[#FFC356]`} circ={'bg-[#dadada]'}/>
          <Button text={'Learn More'} customclass={`text-black bg-[#dadada]`} circ={'bg-[#000]'} p={`group-hover:text-white`}/>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 bg-[#fff]">
        {HomePageProductData.map((item, index) => (
          <Link
            to={item.route}
            key={index}
            className="relative  h-[80vh] max-md:h-[100vh] px-2  flex max-md:flex-col-reverse w-full gap-2"
          >
            <div className="w-1/2 h-full relative max-md:w-full max-md:h-[50%] overflow-hidden">
              <img
                className="h-full hover:scale-[1.1]  transition-all duration-300   w-full object-cover"
                src={item.img1}
                alt=""
              />
              <div className="absolute bottom-3 max-sm:hidden font-primary text-white right-[3%]">
                <ShopNowBtn />
              </div>
            </div>
            <div className="w-1/2   h-full relative max-md:w-full  max-md:h-[50%] overflow-hidden">
              <img
                className={`h-full w-full object-cover hover:scale-[1.1]  transition-all duration-300  ${
                  index === 2 ? "object-top" : ""
                }`}
                src={item.img2}
                alt=""
              />
              <div className="absolute bottom-3 max-sm:hidden font-primary text-white right-[3%]">
                <ShopNowBtn />
              </div>
            </div>
            <div className="absolute w-full -translate-x-1/2 translate-y-[-50%] top-[50%] left-[50%] text-white flex flex-col items-center justify-center gap-5">
              <h2 className="text-xl max-md:text-lg font-Secondary">
                {item.imgDes}
              </h2>
              <h1 className="text-5xl max-md:text-3xl font-semibold font-primary">
                {item.imgTitle}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePagePoduct;
