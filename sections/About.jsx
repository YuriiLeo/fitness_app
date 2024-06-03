'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="grdient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Move_Mastery"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">
          Вітаємо
        </span> на нашому тижневому фітнес міні курсі!
        Наш курс розроблений для тих, хто прагне швидко <span className="font-extrabold text-white"> покращити свою фізичну форму </span> , незалежно від рівня підготовки.
        За <span className="font-extrabold text-white"> 7 днів  </span> ви отримаєте доступ до ефективних тренувань, персоналізованих порад та
        підтримки спільноти однодумців. <span className="font-extrabold text-white">Не зволікайте!</span> Приєднуйтесь до нашого тижневого фітнес міні курсу <span className="font-extrabold text-white"> вже сьогодні </span>
        та зробіть перший крок до вашої нової форми!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
