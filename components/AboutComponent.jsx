"use client";

import Image from "next/image";
import abtimg from "../public/aboutimg.jpg";
import { motion } from "framer-motion";
import { desVariants, titleVariants, togVariants } from "@/utils/animation";

export const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            src={abtimg}
            width={500}
            height={250}
            className="max-md:hidden"
          />
        </motion.div>

        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            We are awards Winning Company
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            World Award
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={togVariants}
            className="px-12 pb-4 mt-4"
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            award from various countries for our work.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={togVariants}
            className="px-12 pb-4"
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            award from various countries for our work.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
