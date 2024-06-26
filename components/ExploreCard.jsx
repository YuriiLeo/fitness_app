'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ index, id, imgUrl, title, subtitle, active, handLeClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative 
    ${active === id ? 'lg:flex-[3.5] flex-[15]' : 'lg:flex-[0.5] flex-[5] '} 
      flex items-center justify-center min-w-[170px] h-[700px]
      transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handLeClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {
      active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px]
       text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        >
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-12 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rouded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
            <p className="font-normal text-[40px] leading-[20px]">
              🏋️‍♂️
            </p>
            {/* <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h1/2 object-contain"
            /> */}
          </div>
          {/* <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Meteverse
          </p> */}
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <h3 className="mt-[20px] font-normal sm:text-[26px] text-[18px] text-white">{subtitle}</h3>
        </div>

      )
    }
  </motion.div>
);

export default ExploreCard;
