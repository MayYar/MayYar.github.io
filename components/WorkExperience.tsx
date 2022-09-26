import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
            <p className="uppercase py-5 text-gray-300 text-center">{'May 2022 - Aug. 2022'}</p>
          </div>
        </article>

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
            src="https://cdn.sanity.io/images/zu5je824/production/b69484e57fbd41f56de587432dd8abb2eadfc3e7-576x576.png"
            alt=""
          />
          <div className="px-0 md:px-10">
            <p className="font-bold text-2xl mt-1 text-center">Wistron, Inc.</p>
            <p className="text-sm font-light text-center">Software Engineer</p>

            <div className="flex space-x-2 my-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/4e71637150747076accb322e2181e922daf53747-800x600.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/4d46e891269e9148796c2fc459eb763f1055585f-500x500.jpg"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/24b2751389e3c80421c96bd25dc3bc3a82db9705-1064x1064.jpg"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300 text-center">{'Feb. 2021 - June 2021'}</p>
          </div>
        </article>

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
            src="https://cdn.sanity.io/images/zu5je824/production/e8b326cc26ef4492f29000972ed688345e6e2ab7-1398x1398.webp"
            alt=""
          />
          <div className="px-0 md:px-10">
            <p className="font-bold text-2xl mt-1 text-center">Yahoo!</p>
            <p className="text-sm font-light text-center">Software Engineering Intern</p>

            <div className="flex space-x-2 my-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/7021b4121d2fc34302ab8607e3ef421b52f92e05-400x400.jpg"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/0a8e5e93534e5e4a924fb4d958eca74a483eadea-225x225.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/4e71637150747076accb322e2181e922daf53747-800x600.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/6cb52a86b4f3da62a20f6e0f6499ed17eac450c1-2500x2500.svg"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/943430856279252a43c9540190ccec8db6d099a2-225x225.png"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300 text-center">{'July 2019 - Aug. 2019'}</p>
          </div>
        </article>

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
            src="https://cdn.sanity.io/images/zu5je824/production/85504105d32d7d50b18bfcc5be3ed7b20e599051-512x512.png"
            alt=""
          />
          <div className="px-0 md:px-10">
            <p className="font-bold text-2xl mt-1 text-center">LINE TV</p>
            <p className="text-sm font-light text-center">Research and Development Intern - Data and AI Team</p>

            <div className="flex space-x-2 my-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/4e71637150747076accb322e2181e922daf53747-800x600.png"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/879abb405cec83efdc4201dee239df1eeb3c156f-1080x1080.webp"
                alt=""
              />
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/943430856279252a43c9540190ccec8db6d099a2-225x225.png"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300 text-center">{'Mar. 2018 - July 2018'}</p>
          </div>
        </article>

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
            src="https://cdn.sanity.io/images/zu5je824/production/e84b7d7dc064fa2025eebd32c7460d0c546e3051-1000x1000.png"
            alt=""
          />
          <div className="px-0 md:px-10">
            <p className="font-bold text-2xl mt-1 text-center">Microsoft</p>
            <p className="text-sm font-light text-center">Microsoft Student Partner - Technology Team</p>

            <div className="flex space-x-2 my-2 justify-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://cdn.sanity.io/images/zu5je824/production/c31b379d245e2d303e63b6beb0a1451f8d88df45-300x300.jpg"
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
                src="https://cdn.sanity.io/images/zu5je824/production/6cb52a86b4f3da62a20f6e0f6499ed17eac450c1-2500x2500.svg"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300 text-center">{'July 2016 - June 2017'}</p>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
