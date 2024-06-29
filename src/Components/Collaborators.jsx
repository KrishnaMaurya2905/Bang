import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import TextAnimation from "../Components/TextAnimation";
const Collaborators = () => {
  const data = [
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485838/audi-logo_zzugth.webp",
      style: "top-[3vh] left-[2vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485853/bentley-logo_yiiqto.webp",
      style: "top-[3vh] left-[15vw] max-xl:left-[25vw] ",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485862/fordy_nqxqm5.webp",
      style: "top-[50vh] left-[2vw] max-xl:top-[25vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485877/lamborghini-logo_z0itoh.webp",
      style: "top-[70vh] left-[15vw] max-lg:left-[10%]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485886/gennnnny_frmln3.webp",
      style: "top-[40vh] left-[27.5vw] ",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485917/hp-logo-transparrent_b0o7yu.webp",
      style: "top-[30vh] left-[50vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485930/xbox-logo_sboclz.webp",
      style: "top-[15vh] left-[80vw] ",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485939/Cisco_Logo_no_TM_Black_transparrent_qrmlyn.webp",
      style: "top-[55vh] left-[80vw]  max-xl:top-[45vh] max-lg:left-[75%]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485954/Sagecome-Company-Logo.png6_o1deci.webp",
      style: "top-[55vh] left-[67vw] max-xl:left-[60%] max-xl:top-[75vh]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719486160/Acura-logo_uhzi5q.webp",
      style: "top-[70vh] left-[54vw] max-xl:left-[40vw] max-lg:left-[35%]",
    },
  ];
  const imgRef = useRef();
  useGSAP(() => {
    gsap.from(".box", {
      height: "0vh",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 20%",
        end: "top center",
      },
    });
  });

  return (
    <div className="relative w-full pt-[20vh] h-full  max-sm:pt-[5vh] pb-10 bg-white ">
      <TextAnimation
        text={"WE CALL THEM PARTNERS"}
        textSize={"text-[4rem]"}
        className={"font-['satoshi'] mb-[10vh] max-xs:text-[1.5rem] max-sm:text-[2rem]"}
      />
      <div
        ref={imgRef}
        className="relative flex flex-wrap justify-center h-[120vh] w-full gap-5 overflow-hidden"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`box hover:drop-shadow-lg hover:duration-200 hover:scale-[1.05]   md:absolute max-md:h-[30vh] max-sm:h-[20vh] md:w-[25vh] h-[25vh] w-[40%] bg-[#F0F0F0] ${item.style}  overflow-hidden`}
          >
            <img src={item.images} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;


// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef, useEffect, memo } from "react";
// import LazyLoad from "react-lazyload";
// import TextAnimation from "../Components/TextAnimation";

// const ImageBox = memo(({ item }) => (
//   <LazyLoad height={200} offset={100}>
//     <div
//       className={`box hover:drop-shadow-lg hover:duration-200 hover:scale-[1.05] md:absolute max-md:h-[30vh] max-sm:h-[20vh] md:w-[25vh] h-[18vh] w-[40%] bg-[#F0F0F0] ${item.style} overflow-hidden`}
//     >
//       <img
//         className="w-full h-full object-contain"
//         src={item.images}
//         alt={item.title}
//       />
//     </div>
//   </LazyLoad>
// ));

// const Collaborators = () => {
//   const data = [
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485838/audi-logo_zzugth.webp",
//       style: "top-[3vh] left-[2vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485853/bentley-logo_yiiqto.webp",
//       style: "top-[3vh] left-[15vw] max-xl:left-[25vw] md:left-[30vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485862/fordy_nqxqm5.webp",
//       style: "top-[50vh] left-[2vw] max-xl:top-[25vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485877/lamborghini-logo_z0itoh.webp",
//       style: "top-[70vh] left-[15vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485886/gennnnny_frmln3.webp",
//       style: "top-[40vh] left-[27.5vw] md:top-[50vh] md:left-[20vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485917/hp-logo-transparrent_b0o7yu.webp",
//       style: "top-[30vh] left-[50vw]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485930/xbox-logo_sboclz.webp",
//       style: "top-[15vh] left-[80vw] md:left-[65vw] md:top-[5vh]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485939/Cisco_Logo_no_TM_Black_transparrent_qrmlyn.webp",
//       style: "top-[55vh] left-[80vw]  md:left-[80vw] max-xl:top-[50vh]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485954/Sagecome-Company-Logo.png6_o1deci.webp",
//       style: "top-[55vh] left-[67vw] max-xl:left-[70vw] max-xl:top-[75vh]",
//     },
//     {
//       images:
//         "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719486160/Acura-logo_uhzi5q.webp",
//       style: "top-[70vh] left-[54vw] max-xl:left-[40vw]",
//     },
//   ];

//   const imgRef = useRef();

//   useEffect(() => {
//     useGSAP(() => {
//       gsap.from(".box", {
//         height: "0vh",
//         scrollTrigger: {
//           trigger: imgRef.current,
//           start: "top 20%",
//           end: "top center",
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="relative w-full pt-[15vh] max-sm:pt-[5vh] pb-10 bg-white">
//       <TextAnimation
//         text="WE CALL THEM PARTNERS"
//         textSize="text-[4rem]"
//         className="font-['satoshi'] mb-[10vh] max-xs:text-[1.5rem] max-sm:text-[2rem]"
//       />
//       <div
//         ref={imgRef}
//         className="relative flex flex-wrap justify-center min-h-screen w-full gap-5 overflow-hidden"
//       >
//         {data.map((item, index) => (
//           <ImageBox key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collaborators;



