import React, {useState} from 'react'
import style from '../styles/Gallery.module.css'
import data from './dataOfGallery'
import { motion } from 'framer-motion'

const Gallery: React.FC = () => {
  const countPictures: number = 12
  const [arrayOfNumber, changeArrayOfNumber] = useState<number[]>([])

  const mix: Function = (arrayOfNumber: number[]) => {
    for(let i = 0; i <= countPictures; i++) {
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

  console.log(arrayOfNumber)

  return (
    <motion.div 
    onViewportEnter={() => changeArrayOfNumber(mix(arrayOfNumber))}
    onViewportLeave={() => changeArrayOfNumber([])}
    className={style.Gallery}>
      <div className={style.head}>
        Галерея
      </div>
      <div className={style.grid}>
        {
          arrayOfNumber.map((value, index) => {
            return (
              <div>{Object.entries(data)[value][1].linkPicture}</div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Gallery