'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h3 className="font-bold md:text-[44px] text-[34px] text-white">Не зволікайте! Приєднуйтесь до нашого тижневого фітнес міні курсу вже сьогодні та зробіть перший крок до вашої нової форми!</h3>
        <button type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Приєднатися зараз</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Фітнес курс</h4>
          <p className="font-normal text-[14px] text-white opacity-50">© 2024  Усі права захищені</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.pass} target="_blank" passHref>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
