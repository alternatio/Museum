import React from 'react'
import style from '../styles/Button.module.css'

interface ButtonProps {
  text?: string
  changeCursorEvent: Function
  enableCursorEvent: boolean
  enableBorder: boolean
}

const Button: React.FC<ButtonProps> = ({
  text, 
  changeCursorEvent,
  enableCursorEvent,
  enableBorder
}) => {
  return (
    <button 
    content={enableBorder.toString()}
    onMouseEnter={() => {
      if(enableCursorEvent) 
        changeCursorEvent('pointer')
    }}
    onMouseLeave={() => {
      if(enableCursorEvent) 
        changeCursorEvent('')
    }}
    className={style.Button}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  enableCursorEvent: true,
  enableBorder: true
}

export default Button