import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useEffect, useState } from "react";
import style from "../styles/Gallery.module.css";
import data from "./dataOfGallery";

const Gallery: React.FC = () => {
  const [arrayOfNumber, changeArrayOfNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);

  function shuffle(array: number[]): number[] {
    let currentIndex = array.length;
    let result: number[] = [...array];

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex],
        result[currentIndex],
      ];
    }

    return [...result];
  }

  useEffect(() => {
    changeArrayOfNumber((arrayOfNumber) => shuffle(arrayOfNumber));
  }, []);

  return (
    <motion.div className={style.Gallery}>
      <div className={style.head}>Галерея</div>
      <div className={style.grid}>
        {arrayOfNumber.map((value, index) => {
          // working in 'require'
          // console.log(`../images/gallery${value}.jpg`)
          // > '../images/gallery3.jpg'

          // not working in 'require'
          // console.log(Object.entries(data)[value-1][1].linkPicture)
          // > '../images/gallery3.jpg'
          // :\

          const imageLink: string = require(`../images/gallery${value}.jpg`);
          const imageName: string =
            Object.entries(data)[value - 1][1].namePicture;
          return (
            <AnimatePresence key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className={style.picture}
                  src={imageLink}
                  alt={imageName}
                />
                <div className={style.name}>{imageName}</div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </motion.div>
  );
};

export default memo(Gallery);
