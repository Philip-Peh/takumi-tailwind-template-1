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
      icon: "./assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "./assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "./assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-24 px-8 xl:px-16"
      id="about"
      style={{ backgroundImage: 'url("./assets/hero.webp")', backgroundSize: 'cover', backgroundPosition: 'top' }}
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1" >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Discover Authentic Japanese Crafts
              </h1>
              <p className="text-black-500 mt-4 mb-6">
s              Our company imports the finest Japanese goods and crafts, bring the best of Japan to Malaysia. Trust us to elevate your business with our expertise and quality products.
              </p>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="./assets/Logo.webp"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={748}
                  height={334}
                  layout="responsive"
                />
              </motion.div>
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
