"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, {useRef} from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { TbArrowUpRight } from "react-icons/tb";
import { desVariants, titleVariants, togVariants } from "@/utils/animation";

const page = () => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <div>
      <div className="bg-[url('/aboutus.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-wider text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants} 
          className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            We have great idea & Interior Design
          </motion.h2>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants} 
          className="text-2xl text-center font-medium pb-10 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vitae
            blanditiis error minus et tempore repellendus, recusandae harum
            impedit eum magni necessitatibus accusamus animi? Ipsa inventore
            dignissimos voluptatibus ex necessitatibus?
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* Left Image Section */}
           <motion.div
           style={{scale}}
           ref={ref}
           className="w-full">
            <Image src="/gallery1123.jpg" width={700} height={700} />
           </motion.div>

           {/* Right Content Section */}
           <motion.div
           initial="offscreen"
           whileInView={"onscreen"}
           variants={togVariants} 
           >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eos earum animi. Minima, exercitationem. Adipisci vitae voluptatem minus nihil consequatur laborum deleniti, excepturi, odit quod eligendi maiores rem cupiditate!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quisquam officiis? Aspernatur necessitatibus, facere a corporis molestias aut animi nam neque ipsam quidem sed iure ex ratione cumque. Aliquid, omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero voluptatibus voluptates nihil error ducimus quidem ipsam odio fugit, nulla iusto, amet magni doloribus, consequuntur repellendus. Enim illo quod in. <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eos earum animi. Minima, exercitationem. Adipisci vitae voluptatem minus nihil consequatur laborum deleniti, excepturi, odit quod eligendi maiores rem cupiditate!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quisquam officiis? Aspernatur necessitatibus, facere a corporis molestias aut animi nam neque ipsam quidem sed iure ex ratione cumque. Aliquid, omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero voluptatibus voluptates nihil error ducimus quidem ipsam odio fugit, nulla iusto, amet magni doloribus, consequuntur repellendus. Enim illo quod in. <br /><br />
              <span className="text-xl font-extrabold tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eos tempore ea dolores corrupti accusamus, quo nihil incidunt, velit esse beatae architecto officia, explicabo repellat et? Omnis itaque amet aspernatur.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowUpRight className="w-5 h-5 ml-2" /></Button>
           </motion.div>
        </div>
        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants} 
            className="text-4xl font-bold tracking-wider text-center uppercase">Team</motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants} 
            className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full" />
                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                <p className="text-sm">
                      Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants} 
            className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full" />
                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                <p className="text-sm">
                      Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={togVariants} 
            className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image src="/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full" />
                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                <p className="text-sm">
                      Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
