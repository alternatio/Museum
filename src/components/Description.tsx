import React, { useState } from 'react'
import style from '../styles/Description.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import textOfDescription from './dataOfDescription'
import textOfSmallBlocks from './dataOfSmallBlocks'
import textContacts from './dataOfContacts'
import OnView from './OnView';
import data from './dataOfTickets'
import cost from './dataOfTicketsLinks'

interface DescriptionProps {
  numberOfPage: number
  linkMuseums: string[]
}

interface BlockProps {
  head?: string
  numberOfPage: number
  numberOfText: number
}

interface ContactsProps {
  numberOfPage: number
  linkMuseums: string[]
}

const Block: React.FC<BlockProps> = (props: BlockProps) => {
  const [open, switchOpen] = useState(false)

  const variants = {
    open: {height: '7rem', width: '100%'},
    closed: {height: 'auto', width: 'min(100%, 50rem)'},
  }

  return (
    <OnView delay={.5}>
      <div className={style.Description}>
        <div className={style.head}>
          {props.head}
        </div>
        <motion.div 
        initial={{height: '7rem', width: '100%'}}
        variants={variants}
        animate={open ? 'closed' : 'open'}
        transition={{duration: 1, type: 'spring'}}
        className={style.text}>
          {textOfDescription[props.numberOfText]}
          <div 
          content={open.toString()}
          className={style.shadow}></div>
        </motion.div>
        <div className={style.bottom}>
          <div className={style.devider}></div>
          <button 
          onClick={() => switchOpen(!open)}
          className={style.cross}>
            {open? <> - </> : <> + </>}
          </button>
        </div>
      </div>
    </OnView>
  )
}

const SmallBlock: React.FC<BlockProps> = (props: BlockProps) => {
  return (
    <OnView delay={.5}>
      <div className={style.Description}>
        <div className={style.head}>
          {props.head}
        </div>
        <motion.div 
        className={style.text}>
          {textOfSmallBlocks[props.numberOfText]}
        </motion.div>
      </div>
    </OnView>
  )
}

const Contacts: React.FC<ContactsProps> = (props: ContactsProps) => {

  let pureContactsData: object = Object.entries(textContacts)[props.numberOfPage-1][1]
  let arrayContactsDataKeys: string[] = Object.keys(pureContactsData)
  let arrayContactsDataValues: string[] = Object.values(pureContactsData)

  const [popupIsOpen, switchPopupIsOpen] = useState<boolean>(false)

  const pureData: string[] = Object.entries(data)[props.numberOfPage-1][1]
  const arrayOfPureDataKeys: string[] = Object.keys(pureData)
  const arrayOfPureDataValues: string[] = Object.values(pureData)

  return (
    <OnView delay={.5}>
      <div className={style.Description}>
        <AnimatePresence>
          {popupIsOpen && (
            <motion.div
            onClick={() => switchPopupIsOpen(false)}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{type:'tween', duration: .5}}
            className={style.popupBackground}>
              <motion.div
              initial={{y:'-100%'}}
              animate={{y:0}}
              exit={{y:'-100%'}}
              transition={{duration:1}}
              className={style.popup}>
                <div className={style.popupHead}>
                  Билеты
                </div>
                <div className={style.popupMain}>
                  {arrayOfPureDataKeys.map((value, index) => {
                      return (
                        <div className={style.popupMain__line}>
                          <div className={style.popupMain__key}>
                            {arrayOfPureDataKeys[index]}
                          </div>
                          <div className={style.popupMain__value}>
                            {arrayOfPureDataValues[index]}
                          </div>
                        </div>
                      )
                  })}
                </div>
                <a 
                href={cost[props.numberOfPage-1]}
                className={style.popupButton}>
                  Купить билеты
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={style.head}>
          Где мы?
        </div>
        <motion.div 
        className={style.textContacts}>
          {
            arrayContactsDataKeys.map((value, index) => {
              return (
                <>
                  <span>
                    {arrayContactsDataKeys[index]}
                  </span>
                  <span>
                    {arrayContactsDataValues[index]}
                  </span>
                </>
              )
            })
          }
        </motion.div>
        <button 
        onClick={() => switchPopupIsOpen(true)}
        className={style.buttonTickets}>
          Купить билеты
        </button>
      </div>
    </OnView>
  )
}

const Description: React.FC<DescriptionProps> = (props: DescriptionProps) => {

  Block.defaultProps = {
    head: 'История'
  }

  return (
    <>
      <Block 
      numberOfText={props.numberOfPage*2-2}
      numberOfPage={props.numberOfPage}
      head='История'/>
      <Block 
      numberOfText={props.numberOfPage*2-1}
      numberOfPage={props.numberOfPage}
      head='О здании'/>
      <SmallBlock 
      numberOfText={props.numberOfPage-1}
      numberOfPage={props.numberOfPage}
      head='Что вас ждёт?'/>
      <Contacts 
      linkMuseums={props.linkMuseums}
      numberOfPage={props.numberOfPage}/>
    </>
  )
  
}

export default Description