import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
const InteractiveImage = () => {
  const imageContainerRef = useRef(null);
  const easeFactor = useRef(0.02);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const targetMousePosition = useRef({ x: 0.5, y: 0.5 });
  const prevPosition = useRef({ x: 0.5, y: 0.5 });
  const aberrationIntensity = useRef(0.0);

  const breakpoints = {
    small:
      "https://res.cloudinary.com/dtkyjnbvf/image/upload/q_auto,f_auto/landingpage-phone_wgttc2.jpg",
    medium:
      "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719662595/Clot-A1-Digital-0002-SoMe-Crop_zmavkc.png",
    large:
      "https://res.cloudinary.com/dtkyjnbvf/image/upload/q_auto,f_auto/Mosaic_land_clot_1_idqfq6.png",
  };
  const getBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 500) {
      return "small";
    } else if (width < 1024) {
      return "medium";
    } else {
      return "large";
    }
  };

  const getInitialImageSrc = () => {
    const breakpoint = getBreakpoint();
    return breakpoints[breakpoint];
  };

  const [imageSrc, setImageSrc] = useState(getInitialImageSrc());

  const handleResize = () => {
    const breakpoint = getBreakpoint();
    setImageSrc(breakpoints[breakpoint]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    let scene, camera, renderer, planeMesh;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(30.0, 30.0)) / vec2(30.0, 30.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/30.0, 1.0/30.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
   
          vec2 uvOffset = strength * - mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    const initializeScene = (texture) => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        getFOV(window.innerWidth),
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 1;
      const imgAspectRatio = texture.image.width / texture.image.height;
      const canvasAspectRatio = window.innerWidth / window.innerHeight;

      let scaleX, scaleY;
      if (canvasAspectRatio > imgAspectRatio) {
        scaleX = canvasAspectRatio / imgAspectRatio;
        scaleY = 1;
      } else {
        scaleX = 1;
        scaleY = imgAspectRatio / canvasAspectRatio;
      }

      const shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture },
      };

      const geometry = new THREE.PlaneGeometry(scaleX * 2, scaleY * 2);
      planeMesh = new THREE.Mesh(
        geometry,
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );
      scene.add(planeMesh);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      imageContainerRef.current.appendChild(renderer.domElement);

      window.addEventListener("resize", onWindowResize, false);
    };
    const getFOV = (width) => {
      if (width < 450) {
        return 100;
      } else if (width < 650) {
        return 105;
      } else if (width < 850) {
        return 80;
      } else if (width < 1200) {
        return 65;
      } else {
        return 55;
      }
    };
    const onWindowResize = () => {
      handleResize();
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.fov = getFOV(window.innerWidth);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const textureLoader = new THREE.TextureLoader();
    let currentTexture;

    const loadTexture = (src) => {
      textureLoader.load(
        src,
        (texture) => {
          if (currentTexture) {
            currentTexture.dispose();
          }
          currentTexture = texture;
          if (!scene) {
            initializeScene(texture);
            animateScene();
          } else {
            planeMesh.material.uniforms.u_texture.value = texture;
            planeMesh.material.uniforms.u_texture.needsUpdate = true;
          }
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
        }
      );
    };

    loadTexture(imageSrc);

    const animateScene = () => {
      const animationId = requestAnimationFrame(animateScene);

      mousePosition.current.x +=
        (targetMousePosition.current.x - mousePosition.current.x) *
        easeFactor.current;
      mousePosition.current.y +=
        (targetMousePosition.current.y - mousePosition.current.y) *
        easeFactor.current;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.current.x,
        1.0 - mousePosition.current.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.current.x,
        1.0 - prevPosition.current.y
      );

      aberrationIntensity.current = Math.max(
        0.0,
        aberrationIntensity.current - 0.05
      );
      planeMesh.material.uniforms.u_aberrationIntensity.value =
        aberrationIntensity.current;

      renderer.render(scene, camera);

      return () => cancelAnimationFrame(animationId);
    };

    const handleMouseMove = (event) => {
      easeFactor.current = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();
      prevPosition.current = { ...targetMousePosition.current };

      targetMousePosition.current.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.current.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity.current = 1;
    };

    const handleMouseEnter = (event) => {
      easeFactor.current = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();

      mousePosition.current.x = targetMousePosition.current.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.current.y = targetMousePosition.current.y =
        (event.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      easeFactor.current = 0.02;
      targetMousePosition.current = { ...prevPosition.current };
    };

    if (imageContainerRef.current) {
      imageContainerRef.current.addEventListener("mousemove", handleMouseMove);
      imageContainerRef.current.addEventListener(
        "mouseenter",
        handleMouseEnter
      );
      imageContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }

    return () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.removeEventListener(
          "mousemove",
          handleMouseMove
        );
        imageContainerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        imageContainerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }

      window.removeEventListener("resize", onWindowResize);

      if (currentTexture) {
        currentTexture.dispose();
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [imageSrc]);
  const landingh1Ref = useRef();
  const landingh1Ref2 = useRef();
  useEffect(() => {
    const splitText = new SplitTextJS(landingh1Ref.current);
    const splitText2 = new SplitTextJS(landingh1Ref2.current);
    gsap.from(splitText.chars, {
      yPercent: 100,
      stagger: 0.012,
      delay:4.6
    });
    gsap.from(splitText2.chars, {
      yPercent: 100,
      stagger: 0.012,
      delay:4.6
    });
  }, []);
  return (
    <div
      id="imageContainer"
      ref={imageContainerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="absolute w-full flex flex-col max-sm:mt-[-10vh] items-center justify-center top-0 left-0 z-[99] overflow-hidden max-md:bg-[url(/src/assets/images/Television/kmn.png)] bg-cover ">
        <h1
          ref={landingh1Ref}
          className=" text-[6rem] h-fit w-fit overflow-hidden max-sm:text-[1.8rem] text-center  text-white font-Decorative uppercase leading-none max-xl:text-[4rem] max-lg:text-[3.5rem] max-2xl:text-[5rem]"
        >
          Experience the Ultimate
        </h1>
        <h1  ref={landingh1Ref2} className="landing-text text-[6rem] h-fit  w-fit overflow-hidden max-sm:text-[2rem] text-center max-xl:text-[4rem]  text-white font-Decorative  uppercase leading-none max-lg:text-[3.5rem] max-2xl:text-[5rem] ">
          Audio Innovation and Design
        </h1>
        <p className="text-md font-primary pb-5 text-[#fff] w-[30%] max-sm:text-sm max-sm:w-[80%] max-lg:w-[50%]  max-xl:w-[60%] text-center mt-5">
          Immerse yourself in unparalleled sound quality and sleek,
          sophisticated design with Bang & Olufsen – where every note is a
          masterpiece.
        </p>
        <Button
          text={"Explore More"}
          p={"group-hover:text-[#000]"}
          circ={"bg-white"}
        />
      </div>
    </div>
  );
};

export default InteractiveImage;
