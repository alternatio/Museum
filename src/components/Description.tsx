import React, { useState } from 'react'
import style from '../styles/Description.module.css'
import { motion } from 'framer-motion'
import textOfDescription from './dataOfDescription'
import textOfSmallBlocks from './dataOfSmallBlocks'
import textContacts from './dataOfContacts'
import OnView from './OnView';
import { Link } from 'react-router-dom';

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

  return (
    <OnView delay={.5}>
      <div className={style.Description}>
        <div className={style.head}>
          Где мы?
        </div>
        <motion.div 
        className={style.textContacts}>
          {
            arrayContactsDataKeys.map((value, index) => {
              return (
                <div className={style.lineText}>
                  <span className={style.lineTextHead}>
                    {arrayContactsDataKeys[index]}
                  </span>
                  <span>
                    {arrayContactsDataValues[index]}
                  </span>
                </div>
              )
            })
          }
        </motion.div>
        {/* <Link to={props.linkMuseums[props.numberOfPage-1]+'/'+'tickets'}> */}
        {/* <Link to={'tickets'}>
          Купить билеты
        </Link> */}
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