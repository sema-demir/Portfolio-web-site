import { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'm', 'a']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>M</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>r</span>
            <span className={`${letterClass} _14`}>h</span>
            <span className={`${letterClass} _15`}>a</span>
            <span className={`${letterClass} _16`}>b</span>
            <span className={`${letterClass} _17`}>a</span>
            <br />
            <span className={`${letterClass} _18`}>B</span>
            <span className={`${letterClass} _19`}>e</span>
            <span className={`${letterClass} _20`}>n</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Frontend Developer / Software Expert</h2>
          <Link to="/contact" className="flat-button">
            BENİMLE İLETİŞİME GEÇİN
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
