import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-24 px-8 xl:px-16"
      id="about"
      style={{ backgroundImage: 'url("assets/hero2.webp")', backgroundSize: 'cover', backgroundPosition: 'top' }}
    >
      <ScrollAnimationWrapper>
      <motion.div
  className="grid gap-8 py-6 sm:py-16"
  variants={scrollAnimation}
>

  <div className="flex w-full h-3/6 items-center justify-center sm:justify-start text-center max-w-[400px] mx-auto">
    <motion.div className="h-full w-full" variants={scrollAnimation}>
      <Image
        src="assets/Logo.webp"
        alt="VPN Illustration"
        quality={100}
        width={748}
        height={334}
        style={{ maxWidth: '400px' }}
        layout="responsive"
      />
    </motion.div>
  </div>
  
  <div className="flex flex-col justify-center items-center text-center bg-black-500 bg-opacity-75 max-w-[1024px] mx-auto p-8">
    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
      Discover Authentic Japanese Crafts
    </h1>
    <p className="text-white-500 mt-4 mb-6 ">
      Our company imports the finest Japanese goods and crafts, bringing the best of Japan to Malaysia. Trust us to elevate your business with our expertise and quality products.
    </p>
  </div>

  <div className="flex flex-col justify-center items-center text-center mx-auto">
    <ButtonPrimary>Check it Out!</ButtonPrimary>
  </div>

</motion.div>
</ScrollAnimationWrapper>
      <div className="relative w-full flex">
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
