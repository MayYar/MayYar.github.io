import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  const skills = [
    {
      _id: 1,
      image: 'https://cdn.sanity.io/images/zu5je824/production/4e71637150747076accb322e2181e922daf53747-800x600.png',
      progress: 100,
    },
    {
      _id: 2,
      image: 'https://cdn.sanity.io/images/zu5je824/production/7021b4121d2fc34302ab8607e3ef421b52f92e05-400x400.jpg',
      progress: 100,
    },
    {
      _id: 4,
      image: 'https://cdn.sanity.io/images/zu5je824/production/8727f4792ff5de845e09d724d6ad65caef25a52d-200x200.gif',
      progress: 100,
    },
    {
      _id: 5,
      image: 'https://cdn.sanity.io/images/zu5je824/production/0330393f8fe04d1dbbc481cf84c75f33a3f706d5-225x225.png',
      progress: 100,
    },
    {
      _id: 6,
      image: 'https://cdn.sanity.io/images/zu5je824/production/af75ec69a4592f316013aebb6856a8c05cbfb7bf-225x225.png',
      progress: 100,
    },
    {
      _id: 7,
      image: 'https://cdn.sanity.io/images/zu5je824/production/6cb52a86b4f3da62a20f6e0f6499ed17eac450c1-2500x2500.svg',
      progress: 100,
    },
    {
      _id: 8,
      image: 'https://cdn.sanity.io/images/zu5je824/production/c31832072e5594f91edf6e3a523c259867f20e4d-225x225.png',
      progress: 100,
    },
    {
      _id: 9,
      image: 'https://cdn.sanity.io/images/zu5je824/production/f7750a0f06352bc1bfc9be53644d6fba03a4df59-1064x1064.jpg',
      progress: 100,
    },
    {
      _id: 10,
      image: 'https://cdn.sanity.io/images/zu5je824/production/f6b6cdda846a2d6a228c0041320e9c10d7a609ad-225x225.png',
      progress: 100,
    },
    {
      _id: 11,
      image: 'https://cdn.sanity.io/images/zu5je824/production/9cf70555f63d360f27c704f77f19aa65971573d6-225x225.png',
      progress: 100,
    },
    {
      _id: 12,
      image: 'https://cdn.sanity.io/images/zu5je824/production/879abb405cec83efdc4201dee239df1eeb3c156f-1080x1080.webp',
      progress: 100,
    },
    {
      _id: 13,
      image: 'https://cdn.sanity.io/images/zu5je824/production/0a8e5e93534e5e4a924fb4d958eca74a483eadea-225x225.png',
      progress: 100,
    },
    {
      _id: 14,
      image: 'https://cdn.sanity.io/images/zu5je824/production/4d46e891269e9148796c2fc459eb763f1055585f-500x500.jpg',
      progress: 100,
    },
    {
      _id: 3,
      image: 'https://cdn.sanity.io/images/zu5je824/production/24b2751389e3c80421c96bd25dc3bc3a82db9705-1064x1064.jpg',
      progress: 100,
    },
    {
      _id: 15,
      image: 'https://cdn.sanity.io/images/zu5je824/production/c31b379d245e2d303e63b6beb0a1451f8d88df45-300x300.jpg',
      progress: 100,
    },
    {
      _id: 16,
      image: 'https://cdn.sanity.io/images/zu5je824/production/943430856279252a43c9540190ccec8db6d099a2-225x225.png',
      progress: 100,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency pr
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} imageURL={skill.image} progress={skill.progress} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} imageURL={skill.image} progress={skill.progress} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
