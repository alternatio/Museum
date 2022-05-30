import React from 'react'
import style from '../styles/Museums.module.css'
import OnView from './OnView'
import { Link } from 'react-router-dom';

interface MuseumsProps {
  changeCursorEvent: Function
  museums: string[]
  linkMuseums: string[]
}

const Museums: React.FC<MuseumsProps> = (props: MuseumsProps) => {
  return (
    <div className={style.Museums}>
      {
        props.museums.map((value, index) => {
          const image: string = require('../images/museum' + (index + 1) + '_1.jpg')
          return (
            <OnView>
            <Link 
            to={props.linkMuseums[index]}
            onMouseEnter={() => props.changeCursorEvent('pointer')}
            onClick={() => {
              window.scrollTo(0, 0)
              props.changeCursorEvent('')
            }}
            onMouseLeave={() => props.changeCursorEvent('')}
            content={props.museums[index]} 
            className={style.museum}>
              {value}
              <img 
              className={style.image}
              src={image} 
              alt={props.museums[index]} />
            </Link>
          </OnView>
          )
        })
      }
    </div>
  )
}

export default Museums