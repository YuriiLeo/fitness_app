'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import {
  fadeIn,
  slideIn,
  staggerContainer,
//   textVariant,
} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      vievport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={styles.heroHeading}
        >
          Move
        </motion.h1>
        <motion.h1
          variants={fadeIn('left', 'tween', 0.4, 1)}
          className={styles.heroHeading}
        >
          Mastery
        </motion.h1>
        {/* <motion.div
          variants={fadeIn('left', 'tween', 0.3, 1)}
          className="flex flex-row justify-center items-center"
        >
          <motion.h1 variants={fadeIn('right', 'tween', 0.2, 1)} className={styles.heroHeading}>Le</motion.h1>
          <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className={styles.heroDText} />
          <motion.h1 variants={fadeIn('right', 'tween', 0.4, 1)} className={styles.heroHeading}>ntenk</motion.h1>
          <motion.div variants={fadeIn('right', 'tween', 0.5, 1)} className={styles.heroDText} />
        </motion.div> */}
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.4, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/yura_photo.png"
          alt="cover"
          className="relative w-full sm:h-[500px] h-[550px] object-cover rounded-tl-[140px] z-10"
        />

        <a href="#explore">
          <div
            className="w-full flex justify-end
          sm:-mt-[70px]
          -mt-[50px] pr-[40px] relative z-10"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
