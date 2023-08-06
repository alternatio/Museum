import React, { memo } from 'react'
import style from '../styles/Cursor.module.css'
import { motion, AnimatePresence } from 'framer-motion'

interface CursorProps {
  mousePosX: number
  mousePosY: number
  contentShow: string
  cursorEvent: string
}

const Cursor: React.FC<CursorProps> = ({mousePosX, mousePosY, contentShow, cursorEvent}) => {

  return (
    <div 
    className={style.Cursor}>
      <motion.div 
      layout
      content={cursorEvent}
      animate={{x:mousePosX, y:mousePosY}}
      transition={{duration: 0}}
      className={style.follower}>
        <AnimatePresence>
          {
            contentShow && (
              <motion.div 
              layout
              initial={{scale: 0, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0, opacity: 0}}
              transition={{duration: 1, type: 'spring'}}
              className={style.show}>
                {contentShow}
              </motion.div>
            )
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default memo(Cursor)