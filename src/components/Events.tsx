import React, { useState } from 'react'
import style from '../styles/Events.module.css'
import { motion, AnimatePresence } from 'framer-motion'






const imageData: string[] = [
  'Авторский лекторий «Как это понимать?»',
  'Акция «ВОСКРЕСЕНЬЕ ВО ДВОРЦЕ»',
  'Образовательная программа на май',
  'Кураторская экскурсия по выставке «Век незавершенных утопий»',
  'Экскурсия для детей 6–10 лет по выставке «Польза, честь и слава» и мастер-класс «Награды для самых-самых»',
  'Образовательная программа на май',
  'Образовательная программа на май (МИР ТРУД МАЙ)',
  'Изменения в режиме работы музея',
  'Об Омском музее изобразительных искусств расскажут на телеканале «Культура»'
]

interface EventsProps {
  changeCursorEvent: Function
  changeContentShow: Function
}

const variants = {
  open: {height: 'auto'},
  closed: {height: '40rem'}
}

const Events: React.FC<EventsProps> = ({changeCursorEvent, changeContentShow}) => {
  const [more, switchMore] = useState(false)


  return (
    <div className={style.Events}>
      <div className={style.head}>События</div>
      <motion.div 
      initial={{height: '40rem'}}
      animate={more ? 'open' : 'closed'}
      variants={variants}
      transition={{duration: 2, type: 'spring'}}
      className={style.wrapper}>
        <AnimatePresence>
        {!more && 
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className={style.shadow}></motion.div>
        }
        </AnimatePresence>
        <div 
        className={style.grid}>
          {
            imageData.map((value, index) => {
              const image: string = require('../images/grid' + (index + 1) + '.jpg')
              return (
                <img 
                className={style.image}
                draggable={false}
                onMouseEnter={() => {
                  changeContentShow(imageData[index])
                  changeCursorEvent('pointer')
                }}
                onMouseLeave={() => {
                  changeContentShow(null)
                  changeCursorEvent('')
                }}
                src={image} 
                content={imageData[index]}/>
              )
            })
          }
        </div>
      </motion.div>
      <div className={style.more}>
        <div className={style.devider}></div>
        <button 
        className={style.more__button}
        // onMouseEnter={() => changeCursorEvent('pointer')}
        // onMouseLeave={() => changeCursorEvent('')}
        onClick={() => switchMore(!more)}
        >
          {more ? <>Меньше</> : <>Больше</>}
        </button>
      </div>
    </div>
  )
}

export default Events