import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:h-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden justify-center">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:w-[100px] md:h-[100px] xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.sanity.io/images/zu5je824/production/cbdb61b6f0935915e8646a7b65519f53e60a2b00-512x512.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <p className="font-bold text-2xl mt-1 text-center">ServiceNow</p>
        <p className="text-sm font-light text-center">Software Engineering Intern</p>

        <div className="flex space-x-2 my-2 justify-center">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://cdn.sanity.io/images/zu5je824/production/af75ec69a4592f316013aebb6856a8c05cbfb7bf-225x225.png"
            alt=""
          />
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://cdn.sanity.io/images/zu5je824/production/f7750a0f06352bc1bfc9be53644d6fba03a4df59-1064x1064.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://cdn.sanity.io/images/zu5je824/production/943430856279252a43c9540190ccec8db6d099a2-225x225.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300 text-center">{'May 2022 - Aug. 202'}</p>

        {/* <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul> */}
      </div>
    </article>

    //----------------------------------------------------------------
  );
}
