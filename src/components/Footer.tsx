import React, {memo} from 'react'
import style from '../styles/Footer.module.css'

interface FooterProps {
  changeCursorEvent: Function
  numberOfPage: number
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div 
    content={props.numberOfPage.toString()}
    className={style.Footer}>
      <div className={style.marquee}>
        Бюджетное учреждение культуры Омской области
      </div>
      <div className={style.marquee}>
        «Омский областной музей изобразительных искусств имени М. А. Врубеля»
      </div>
      <div 
      content={props.numberOfPage.toString()}
      className={style.contacts}>
        <div className={style.mail}>
          <span>E-mail:</span>
          <span>post@vrubel.omskportal.ru</span>
          <span>vrubel_omsk@mail.ru</span>
        </div>
        <div className={style.director}>
          <span>Директор</span>
          <span>Буреева Фарида Мухаматшарыповна</span>
          <span>+7(3812) 24-15-64</span>
          <span>farida@mail.ru</span>
        </div>
        <button 
        content={props.numberOfPage.toString()}
        onMouseEnter={() => props.changeCursorEvent('pointer')}
        onMouseLeave={() => props.changeCursorEvent('')}
        className={style.button}>
          Больше контактов
        </button>
      </div>
      <div 
      content={props.numberOfPage.toString()}
      className={style.bottom}>
        <span>
          2022
        </span>
        <span>
          Alternatio
        </span>
      </div>
    </div>
  )
}

export default memo(Footer)