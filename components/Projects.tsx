import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/zu5je824/production/e7a3a45d21a9c280c2e9938d1e15ca8f87919979-2880x1576.png"
            alt=""
            className="mb-5 md:mb-0 flex-shrink-0 w-60 h-35 object-cover object-center rounded-lg md:w-350 md:h-180 xl:w-[550px] xl:h-[320px]"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              {/* <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '} */}
              {'Covid-19 Tracker'}
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/c31832072e5594f91edf6e3a523c259867f20e4d-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/8727f4792ff5de845e09d724d6ad65caef25a52d-200x200.gif"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/0330393f8fe04d1dbbc481cf84c75f33a3f706d5-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/af75ec69a4592f316013aebb6856a8c05cbfb7bf-225x225.png"
                alt=""
              />
            </div>
            <p className="text-lg text-center md:text-left">
              {'Build a COVID-19 Tracker with ReactJS, Material UI, ChartJS'}
            </p>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/zu5je824/production/ae9a1fa15a1429dd11b9910b2794ccad192f900a-2880x1800.png"
            alt=""
            className="mb-5 md:mb-0 flex-shrink-0 w-60 h-35 object-cover object-center rounded-lg md:w-350 md:h-180 xl:w-[550px] xl:h-[320px]"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              {/* <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '} */}
              {'Instagram Clone'}
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/c31832072e5594f91edf6e3a523c259867f20e4d-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/8727f4792ff5de845e09d724d6ad65caef25a52d-200x200.gif"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/0330393f8fe04d1dbbc481cf84c75f33a3f706d5-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/af75ec69a4592f316013aebb6856a8c05cbfb7bf-225x225.png"
                alt=""
              />
            </div>
            <p className="text-lg text-center md:text-left">
              {'Used ReactJS, Tailwind CSS and Firebase to build an Instagram clone with 4 main pages from scratch.'}
            </p>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/zu5je824/production/f7804fdebd859fcad52b8ab74dadd281e0bfcc9c-432x213.png"
            alt=""
            className="mb-5 md:mb-0 flex-shrink-0 w-60 h-35 object-cover object-center rounded-lg md:w-350 md:h-180 xl:w-[550px] xl:h-[320px]"
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              {/* <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '} */}
              {'Sentiment Analysis for Comments on Hot News'}
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/7021b4121d2fc34302ab8607e3ef421b52f92e05-400x400.jpg"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/6cb52a86b4f3da62a20f6e0f6499ed17eac450c1-2500x2500.svg"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/8727f4792ff5de845e09d724d6ad65caef25a52d-200x200.gif"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/0330393f8fe04d1dbbc481cf84c75f33a3f706d5-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/af75ec69a4592f316013aebb6856a8c05cbfb7bf-225x225.png"
                alt=""
              />
            </div>
            <p className="text-lg text-center md:text-left">
              {'Detected Facebook commenters’ sentiment of hot news and performed data visualization'}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
