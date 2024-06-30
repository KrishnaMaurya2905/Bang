import React from "react";
import ShopLanding from "../Components/ShopLanding";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
const Speakers = () => {
  const Productsdata = [
    {
      title: "BEOSOUND 2",
      des: "Elegant home speaker",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491407/Beosound_2_rtlfsw.webp",
      price: "$3,199",
    },
    {
      title: "BEOSOUND EMERGE",
      des: "Compact WiFi home speaker",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491447/Beosound_Emerge_cmc7i2.webp",
      price: "$899",
    },
    {
      title: "BEOLAB 90",
      des: "Advanced floor standing speakers",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491368/Beolab_90_pkm8ew.webp",
      price: "$150,000",
    },
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491453/BEOSOUND_A5_p4tars.webp",
      price: "$1,499"
    }
    ,
    {
      title: "BEOSOUND A1 2ND GEN",
      des: "Portable Bluetooth speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491452/BEOSOUND_A1_cga0rt.webp",
      price: "$299",
    },
    {
      title: "BEOSOUND A9",
      des: "Powerful, minimalist speaker",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491453/BEOSOUND_A9_ks5x4f.webp",
      price: "$3,399",
    },
    {
      title: "BEOSOUND EXPLORE",
      des: "Waterproof outdoor speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491448/BEOSOUND_EXPLORE_mrobw6.webp",
      price: "$249",
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491370/BEOLAB_8_kimqgn.webp",
      price: "$6,598",
     
    },
    {
     title: "BEOSOUND BALANCE",
      des: "Outstanding living room speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491447/BEOSOUND_BALANCE_pxebgf.webp",
      price: "$3,399",
    },
    {
      title: "BEOLIT 20",
      des: "Powerful Bluetooth speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491369/BEOLIT_20_hxrj0n.webp",
      price: "$599",
     
    },
    {
     title: "BEOSOUND LEVEL",
      des: "Portable WiFi Speaker",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491449/BEOSOUND_LEVE_nraisl.webp",
      price: "$1,999",
    },
  ];

  const ShopLandingdata = {
    Img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1719664278/Britta-4_ccmt3z.webp",
    Title: "Premium Audio Experience",
    Para: "Experience rich, authentic sound with Bang & Olufsen's premium speakers, crafted to perfection for stunning clarity and superior acoustics.",
    shopQue: "WHICH SPEAKER IS RIGHT FOR YOU?",
    shopCompare:
      "Compare our speakers and get help finding your perfect match.",
  };

  return (
    <div className="">
      <ShopLanding ShopLandingdata={ShopLandingdata} />
      <Products Productsdata={Productsdata} />
      <Footer/>
    </div>
  );
};

export default Speakers;
