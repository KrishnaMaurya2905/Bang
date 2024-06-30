import React, { useState, useMemo, useCallback, useRef , useEffect} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import FullScreenNavbar from "../Components/FullScreenNavbar";
import NavLinkAnimation from "./NavLinkAnimation";
import Logo from "./Logo";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navLinkData, setNavLinkData] = useState(null);
  const Navbardata = useMemo(
    () => [
      {
        title: "SPEAKERS",
        path: "/speakers",
        data: [
          {
            categoryTitle: "All Speakers",
            categoryDescription: "BEOSOUND A9",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719505745/layer-bang-olufsen-balance-speaker-design_dezeen_2364_col_12_oe9fon.jpg",
          },
          {
            categoryTitle: "Portable",
            categoryDescription: "BEOSOUND A1 2ND GEN",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719505828/XtTL8xyXXrSAiuSoTLnKFW_aqtfy4.jpg",
          },
          {
            categoryTitle: "Home Audio",
            categoryDescription: "BEOSOUND BALANCE",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719491447/BEOSOUND_BALANCE_pxebgf.webp",
          },
          {
            categoryTitle: "Speaker Sets",
            categoryDescription: "BEOLAB 8",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719505988/Untitled-design34_bsckwq.jpg",
          },
          {
            categoryTitle: "Speaker Accessories",
            categoryDescription: "BESOUND LEVEL WALL BRACKET",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719505969/w2000_q60_icpz8j.jpg",
          },
        ],
      },
      {
        title: "HEADPHONES",
        path: "/headphones",
        data: [
          {
            categoryTitle: "All Headphones",
            categoryDescription: "BEOPLAY H9",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719506219/17ba5f8986966c9cfd870c2877c56ad5_me9okp.jpg",
          },
          {
            categoryTitle: "Over-Ear",
            categoryDescription: "BEOPLAY H95",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719506233/Beoplay-H95-_-Beoplay-A9-4th-Gen.-0004-Sound-And-Vision-For-Your-Home-2000x2800px_euz88b.webp",
          },
          {
            categoryTitle: "In-Ear",
            categoryDescription: "BEOPLAY EX FERRARI EDITION",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719506242/EX_Ferrari_HR_d8ojp5.webp",
          },
          {
            categoryTitle: "Headphone Accessories",
            categoryDescription: "CASE FOR BEOPLAY H95",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719506251/CD.Bang.Rose.Top_1a0f8d99-b25b-4a84-a46a-5df5b649183b_hx6wf9.jpg",
          },
        ],
      },
      {
        title: "TELEVISION",
        path: "/television",
        data: [
          {
            categoryTitle: "All Television",
            categoryDescription: "BEOVISION HARMONY",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719505072/BEOVISION_HARMONY_qc2rpz.webp",
          },
          {
            categoryTitle: "Remote and Smart Home",
            categoryDescription: "BEOREMOTE HALO",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514495/PA_Halo_Alu_Table_front_ostmgq.webp",
          },
        ],
      },
      {
        title: "SOUNDBARS",
        path: "/soundbars",
        data: [
          {
            categoryTitle: "Stage Sounbars",
            categoryDescription: "BEOSOUND STAGE",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514549/Stage_Bronze_GG2_zf0cbm.jpg",
          },
          {
            categoryTitle: "Theatre Sounbars",
            categoryDescription: "BEOSOUND THEATRE",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514582/9407381c4096d39fa3884a88d1f7a756_f7hlft.jpg",
          },
        ],
      },
      {
        title: "WORLD OF B&O",
        path: "/worldb&o",
        data: [
          {
            categoryTitle: "Art",
            categoryDescription: "BEOPLAY A9",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514633/A9_Portrait_ls7fjy.webp",
          },
          {
            categoryTitle: "Music",
            categoryDescription: "Intriducing a harmonius Fusion",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514644/Cercle_Hero_gy6e40.webp",
          },
          {
            categoryTitle: "Culture",
            categoryDescription: "At the mayfair flagship store",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514671/Hero_outside_rivroo.webp",
          },
          {
            categoryTitle: "Living",
            categoryDescription: "Interview with Caroline wozniacki",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514692/Couple_square_wnysru.webp",
          },
          {
            categoryTitle: "Timelessness",
            categoryDescription: "besound 9000",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719514700/Lifestyle_Beosystem9000c_0015_16x9_db091m.webp",
          },
        ],
      },
    ],
    []
  );

  const handleButtonClick = useCallback((item) => {
    setNavLinkData(item);
    setOpenNav(true);
  }, []);

  return (
    <>
    
    
    <div className="navcontainer max-2xl:px-5 w-full px-20 h-[8vh]  mix-blend-difference  text-white fixed flex justify-between items-center z-[9] top-0 ">
      <Link to="/" className="logo-container  w-[10rem]  overflow-hidden">
        <Logo/>
      </Link>
      <div
        className={`flex ${
          openNav ? "opacity-5" : "opacity-100"
        } text-sm items-center  max-lg:hidden gap-[3vw]`}
      >
        {Navbardata.map((item, index) => (
          <div
            key={index}
            className="p-1 w-fit  font-primary cursor-pointer"
            onClick={() => handleButtonClick(item)}
          >
            <NavLinkAnimation text={item.title} />
          </div>
        ))}
      </div>
      <div className="menu-button-container lg:hidden ">
        <HiMenuAlt4
          onClick={() => {
            setOpenNav((prev) => !prev);
            setNavLinkData(Navbardata[0]);
          }}
          className="text-xl"
        />
      </div>
      
    </div>
    <FullScreenNavbar
    setOpenNav={setOpenNav}
    openNav={openNav}
    navLinkData={navLinkData}
    Navbardata={Navbardata}
    handleButtonClick={handleButtonClick}
  />
  </>
  );
};

export default Navbar;



