import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Museums from './components/Museums';
import Description from './components/Description'
import SmallHeader from './components/SmallHeader'
import style from './styles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';

interface HomePageProps {
  changeContentShow: Function
  changeCursorEvent: Function
  numberOfPage: number
}
interface PageOfMuseumProps {
  changeContentShow: Function
  changeCursorEvent: Function
  numberOfPage: number
  textOfPageItalic?: string
  textOfPage?: string
}

const museums: string[] = [
  'Генерал-губернаторский музей',
  'Врублевский корпус',
  'Центр "Эрмитаж-Сибирь"'
]
const linkMuseums: string[] = [
  'GovernorGeneralsMuseum',
  'VrublevskyBuilding',
  'HermitageSiberiaCenter'
]

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <>
      <Header 
      numberOfPage={props.numberOfPage}
      changeContentShow={props.changeContentShow}/>

      <Museums 
      museums={museums}
      linkMuseums={linkMuseums}
      changeCursorEvent={props.changeCursorEvent}/>

      <Events 
      changeCursorEvent={props.changeCursorEvent} 
      changeContentShow={props.changeContentShow}/>

      <Footer 
      numberOfPage={props.numberOfPage}
      changeCursorEvent={props.changeCursorEvent}/>
    </>
  )
}
const PageOfMuseum: React.FC<PageOfMuseumProps> = (props: PageOfMuseumProps) => {
  const [headerVisible, switchHeaderVisible] = useState(false)

  return (
    <>
      <SmallHeader 
      changeCursorEvent={props.changeCursorEvent}
      headerVisible={headerVisible}/>

      <Header 
      switchHeaderVisible={switchHeaderVisible}
      textOfPageItalic={props.textOfPageItalic}
      textOfPage={props.textOfPage}
      numberOfPage={props.numberOfPage}
      changeContentShow={props.changeContentShow}/>

      <Description 
      linkMuseums={linkMuseums}
      numberOfPage={props.numberOfPage}/>

      <Gallery />

      <Footer 
      numberOfPage={props.numberOfPage}
      changeCursorEvent={props.changeCursorEvent}/>
    </>
  )
}


const App: React.FC = () => {
  const [mousePosX, changeMousePosX] = useState(0)
  const [mousePosY, changeMousePosY] = useState(0)
  const [contentShow, changeContentShow] = useState('')
  const [cursorEvent, changeCursorEvent] = useState('')

  return (
    <div 
    onMouseMove={e => {
      changeMousePosX(e.clientX)
      changeMousePosY(e.clientY)
    }}
    className={style.App}>
      <div className={style.wrapper}>
        <Cursor 
        mousePosX={mousePosX} 
        mousePosY={mousePosY} 
        contentShow={contentShow} 
        cursorEvent={cursorEvent}/>

        <Routes>
          <Route path='/' element={
            <HomePage 
            numberOfPage={0}
            changeContentShow={changeContentShow} 
            changeCursorEvent={changeCursorEvent}/>
          }/>

          <Route path='GovernorGeneralsMuseum' element={
            <PageOfMuseum 
            numberOfPage={1}
            textOfPageItalic={'Генерал-'}
            textOfPage={'Губернаторский музей'}
            changeContentShow={changeContentShow}
            changeCursorEvent={changeCursorEvent}/>
          }>
            <Route path='tickets' element={
              <div>4</div>
            }/>
          </Route>

          <Route path='VrublevskyBuilding' element={
            <PageOfMuseum 
            numberOfPage={2}
            textOfPageItalic={'Врублевский'}
            textOfPage={'корпус'}
            changeContentShow={changeContentShow}
            changeCursorEvent={changeCursorEvent}/>
          }>
            <Route path='tickets' element={
              <div>5</div>
            }/>
          </Route>

          <Route path='HermitageSiberiaCenter' element={
            <PageOfMuseum 
            numberOfPage={3}
            textOfPageItalic={'Центр'}
            textOfPage={'"Эрмитаж-Сибирь"'}
            changeContentShow={changeContentShow}
            changeCursorEvent={changeCursorEvent}/>
          }>
            <Route path='tickets' element={
              <PageOfMuseum 
              numberOfPage={4}
              textOfPageItalic={'Fuf'}
              textOfPage={'Shit'}
              changeContentShow={changeContentShow}
              changeCursorEvent={changeCursorEvent}/>
            }/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
