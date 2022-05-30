import React from 'react'
import { motion } from 'framer-motion'

interface OnViewProps {
  children: React.ReactNode
  delay?: number
  scale?: number
}

const OnView: React.FC<OnViewProps> = ({children, delay, scale}) => {
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    transition={{duration: 1, delay: delay, type: 'tween'}}
    variants={{
      visible: {opacity: 1, scale: 1},
      hidden: {opacity: 0, scale: scale}
    }}
    >
      {children}
    </motion.div>
  )
}

OnView.defaultProps = {
  delay: 0,
  scale: 1
}

export default OnView