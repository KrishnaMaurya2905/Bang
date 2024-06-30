import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Components/Logo";

const FullScreenNavbar = React.memo(
  ({
    setOpenNav,
    openNav,
    navLinkData,
    Navbardata,
    handleButtonClick,
  }) => {
    const data = navLinkData ? navLinkData.data : [];
    const [imageSrc, setImageSrc] = useState(null);
    const [imageDescription, setImageDescription] = useState(null);

    useEffect(() => {
      if (data && data.length > 0) {
        setImageSrc(data[0].categoryImage);
        setImageDescription(data[0].categoryDescription);
      }
    }, [data]);

    return (
      <div
        className={`full-screenNavbar ${
          openNav
            ? "w-[65%] max-xl:w-[100%] px-[5%] max-sm:px-[8%] "
            : "w-0"
        } left-0 h-screen duration-[1.2s] overflow-hidden top-0 flex flex-col gap-20 py-10 fixed bg-black`}
      >
        <div
          className={` top-part-fullscreen-Nav ${
            openNav ? "opacity-100 delay-700" : "opacity-0 duration-500"
          }  h-[10vh] flex justify-between items-center`}
        >
          <div className="h-[8vh] max-sm:hidden flex gap-[.8vw] text-[.8rem] font-primary items-center w-full ">
            {Navbardata.map((item, index) => (
              <div
                key={index}
                className="p-1 w-fit cursor-pointer"
                onClick={() => handleButtonClick(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <Link to="/" className="logo-container sm:hidden">
            <Logo />
          </Link>
          <NavClosingButton setOpenNav={setOpenNav} openNav={openNav} />
        </div>
        <div
          className={`bottom-part-fullscreen-Nav ${
            openNav ? "opacity-100 delay-700" : "opacity-0 duration-500"
          }  h-full w-full flex justify-between`}
        >
          <div
            className={`Nav-routes flex flex-col gap-[3%] max-sm:hidden text-white`}
          >
            <Link
              to={navLinkData?.path}
              className="text-sm font-primary uppercase pb-5"
            >
              {navLinkData?.title !== "WORLD OF B&O" &&
              navLinkData?.title !== "SUPPORT"
                ? "shop for "
                : ""}
              {navLinkData?.title}
            </Link>
            {data &&
              data.map((item, index) => (
                <NavLink
                  to={navLinkData?.path}
                  key={index}
                  className={` text-[1.8rem] max-md:text-[1.5rem] font-primary`}
                  onMouseEnter={() => {
                    setImageSrc(item.categoryImage);
                    setImageDescription(item.categoryDescription);
                  }}
                  onClick={() => setOpenNav((prev) => !prev)}
                >
                  {item.categoryTitle}
                </NavLink>
              ))}
          </div>
          <div className={`image-div max-sm:hidden  w-[45%] max-lg:w-[50%]`}>
            <img
              className="h-[60vh] max-md:h-[40vh] w-full object-cover"
              src={imageSrc}
              alt="Category"
            />
            <p className="pt-4 uppercase  font-Secondary font-[500] tracking-wider ">
              {imageDescription}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:hidden text-xl font-primary capitalize">
            {Navbardata.map((item, index) => (
              <NavLink
                to={item.path}
                className={(e) =>
                  e.isActive ? "text-[#FFC356] " : " p-1 w-fit  cursor-pointer"
                }
                key={index}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

const NavClosingButton = ({ setOpenNav, openNav }) => {
  return (
    <div
      onClick={() => {
        setOpenNav(false);
      }}
      className={`h-5 ${openNav ? "opacity-1" : "opacity-0"}  cursor-pointer`}
    >
      <GrClose className="text-xl" />
    </div>
  );
};

export default FullScreenNavbar;
