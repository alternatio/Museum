import React, {memo} from 'react'
import style from '../styles/Header.module.css'
import OnView from './OnView';
import { motion } from 'framer-motion';

interface HeaderProps {
  changeContentShow: Function
  numberOfPage: number
  textOfPageItalic?: string
  textOfPage?: string
  switchHeaderVisible?: Function
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const contentImage: string[] = [
    'Демон сидящий, Михаил Александрович Врубель',
    'Царевна-Лебедь, Михаил Александрович Врубель',
    'Сирень, Михаил Александрович Врубель',
    'Девочка на фоне персидского ковра, Михаил Александрович Врубель'
  ]
  const image: string = require('../images/Vrubel' + (props.numberOfPage + 1) + '.webp')

  return (
    <div 
    className={style.Header}>
      <header className={style.head}>
        <motion.div 
        onViewportEnter={() => {
          if(props.switchHeaderVisible !== undefined) {
            props.switchHeaderVisible(false)
          }
        }}
        onViewportLeave={() => {
          if(props.switchHeaderVisible !== undefined) {
            props.switchHeaderVisible(true)
          }
        }}
        className={style.top}>
          <span>{props.textOfPageItalic}</span> {props.textOfPage}
        </motion.div>
        <OnView delay={.5}>
          <div className={style.description}>
            Омский областной музей изобразительных искусств
          </div>
        </OnView>
      </header>
      <motion.img 
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      transition={{duration: 1, type: 'tween'}}
      variants={{
        visible: {opacity: 1, scale: 1},
        hidden: {opacity: 0, scale: .5}
      }}
      draggable={false}
      onMouseEnter={() => props.changeContentShow(contentImage[props.numberOfPage])}
      onMouseLeave={() => props.changeContentShow(null)}
      className={style.image} 
      src={image} 
      alt={contentImage[props.numberOfPage]} />
    </div>
  )
}

Header.defaultProps = {
  textOfPageItalic: 'Музей',
  textOfPage: 'Имени Врубеля'
}

export default memo(Header)