"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[15%] w-[220px] h-[170px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img src="/world-01.png" alt="people" className="w-full h-full" />
            <div className="absolute bottom-2 left-4">
              <div className="flex flex-row gap-[8px] items-center mb-[8px]">
                <div className="flex flex-row">
                  <img
                    src="/small-icon-01.png"
                    alt="people"
                    className=" object-contain z-20"
                  />
                  <img
                    src="/small-icon-02.png"
                    alt="people"
                    className="-ml-[10px] object-contain z-10"
                  />
                  <img
                    src="/small-icon-03.png"
                    alt="people"
                    className="-ml-[10px] object-contain"
                  />
                </div>
                <p className="text-white text-[12px]">+ 264 has joined</p>
              </div>
              <h4 className="font-bold text-[18px] text-white">
                The Upside Down
              </h4>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-[20%] w-[220px] h-[170px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <div className="relative">
            <img src="/world-02.png" alt="people" className="w-full h-full" />
            <div className="absolute bottom-2 left-4">
              <div className="flex flex-row gap-[8px] items-center mb-[8px]">
                <div className="flex flex-row">
                  <img
                    src="/small-icon-01.png"
                    alt="people"
                    className=" object-contain z-20"
                  />
                  <img
                    src="/small-icon-02.png"
                    alt="people"
                    className="-ml-[10px] object-contain z-10"
                  />
                  <img
                    src="/small-icon-03.png"
                    alt="people"
                    className="-ml-[10px] object-contain"
                  />
                </div>
                <p className="text-white text-[12px]">+ 188 has joined</p>
              </div>
              <h4 className="font-bold text-[18px] text-white">Hawkins Labs</h4>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
