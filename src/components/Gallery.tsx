import React, {useState} from 'react'
import style from '../styles/Gallery.module.css'
import data from './dataOfGallery'
import { AnimatePresence, motion } from 'framer-motion'

const Gallery: React.FC = () => {
  const countPictures: number = 13
  const [arrayOfNumber, changeArrayOfNumber] = useState<number[]>([])

  const mix: Function = (arrayOfNumber: number[]) => {
    for(let i = 1; i <= countPictures; i++) {
      arrayOfNumber.push(i)
    }

    let swapper: number, 
    currentIndex: number = arrayOfNumber.length, 
    randomIndex: number

    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      swapper = arrayOfNumber[currentIndex]
      arrayOfNumber[currentIndex] = arrayOfNumber[randomIndex]
      arrayOfNumber[randomIndex] = swapper
    }
    return arrayOfNumber
  }

  return (
    <motion.div 
    onViewportEnter={() => changeArrayOfNumber(mix(arrayOfNumber))}
    onViewportLeave={() => changeArrayOfNumber([])}
    viewport={{once: true}}
    className={style.Gallery}>
      <div className={style.head}>
        Галерея
      </div>
      <div className={style.grid}>
        {
          arrayOfNumber.map((value, index) => {

            // working in 'require'
            // console.log(`../images/gallery${value}.jpg`)
            // > '../images/gallery3.jpg'
            
            // not working in 'require'
            // console.log(Object.entries(data)[value-1][1].linkPicture)
            // > '../images/gallery3.jpg'
            // :\

            const imageLink: string = require(`../images/gallery${value}.jpg`)
            const imageName: string = Object.entries(data)[value-1][1].namePicture
            return (
              <AnimatePresence>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: .5, type:'tween'}}
                >
                  <img 
                  className={style.picture}
                  src={imageLink} 
                  alt={imageName} />
                  <div className={style.name}>
                    {imageName}
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Gallery