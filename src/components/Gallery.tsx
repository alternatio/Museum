import React, {useState} from 'react'
import style from '../styles/Gallery.module.css'
import data from './dataOfGallery'
import { motion } from 'framer-motion'

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
    className={style.Gallery}>
      <div className={style.head}>
        Галерея
      </div>
      <div className={style.grid}>
        {
          
          arrayOfNumber.map((value, index) => {
            const image: string = require('../images/gallery'+value+'.jpg')
            // const linkToImage: string = Object.entries(data)[value][1].linkPicture
            // console.log(linkToImage)
            // const image1: string = require(linkToImage)
            return (
              <div>
                <img src={image} alt="" />
                <div>{Object.entries(data)[value-1][1].namePicture}</div>
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Gallery