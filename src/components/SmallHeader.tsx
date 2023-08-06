import React, {memo} from 'react'
import style from '../styles/SmallHeader.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom';

interface SmallHeaderProps {
  headerVisible?: boolean
  changeCursorEvent: Function
}

const SmallHeader: React.FC<SmallHeaderProps> = (props: SmallHeaderProps) => {
  return (
    <AnimatePresence>
      {/* {props.headerVisible &&  */}
        <motion.div 
        initial={{y: '-100%'}}
        animate={{y: '0'}}
        exit={{y: '-100%'}}
        transition={{type: 'tween', duration: 1}}
        className={style.SmallHeader}>
          <div className={style.wrapper}>
            <Link 
            onClick={() => {
              props.changeCursorEvent('')
              window.scrollTo(0, 0)
            }}
            onMouseEnter={() => props.changeCursorEvent('pointer')}
            onMouseLeave={() => props.changeCursorEvent('')}
            to={'/'}
            className={style.logo}>
              <span>Музей</span> имени Врубеля
            </Link>
          </div>
        </motion.div>
      {/* } */}
    </AnimatePresence>
  )
}

SmallHeader.defaultProps = {
  headerVisible: true
}

export default memo(SmallHeader)