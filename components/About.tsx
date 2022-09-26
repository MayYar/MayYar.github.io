import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/zu5je824/production/41573109b629fc032d5cf67f7c01e6fc07406255-1108x1478.jpg"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-base">
          I am an M.S. in Electrical and Computer Engineering student at{' '}
          <a href="https://www.gatech.edu/">
            <span className="underline decoration-[#F7AB0A]/90">Georgia Institute of Technology</span>
          </a>
          . Recently, I completed my summer internship at{' '}
          <span className="underline decoration-[#F7AB0A]/90">ServiceNow</span> as a software engineering intern.
          <br />
          <br />
          I am currently seeking new grad software engineer full time opportunities. Feel free to contact me!
          <br />
          <br />
          My interests include Front-end and Full-Stack development, Data Mining and Engineering.
          <br />
          <br />
          <br />
          Ex-Microsoft, Yahoo!, Wistron, Line TV
        </p>

        <div className="">
          <a
            href="https://drive.google.com/file/d/1syWt4DvMUDKsfZ_1Wok7_h-F9232TbDW/view?usp=sharing"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            target="_blank"
            rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
