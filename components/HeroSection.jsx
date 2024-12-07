"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowRight } from "react-icons/tb";
import hall from "../public/hall.jpg"

import { desVariants, titleVariants, togVariants } from "@/utils/animation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
      {/* Left Section */}
      <div className="ml-10 lg:w-1/2 xl:pb-10 lg:pb-8 font-arial">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Make your home a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={togVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Change your view with the best interior design. We provide the best
          interior design for your Home. Make every moment beatiful with the
          best interior design. Change your view with the best interior design.
          We provide the best interior design for your Home. Make every moment
          beatiful with the best interior design.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={togVariants}
        >
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Book Now <TbArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      {/* Right Image Section */}
      <div className="w-1/2">
        <Image
          src={hall}
          width={500}
          height={500}
          alt=""
          className="absolute right-10 xl:h-[348px] xl:w-[600px] lg:h-[344px] lg:w-[500px] hidden lg:block"
        />
      </div>
    </div>
  );
};
