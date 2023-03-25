import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Intro = () => {
    const transition={duration:2,type:'spring'}
    const theme=useContext(themeContext) 
    const darkMode=theme.state.darkMode
  return (
    <div className="intro">
    <div className="i-left">
    <div className="i-name">
        <span style={{color:darkMode?'white':'black'}}>HI! I AM</span>
        <span>Prantik De</span>
        <span>Web Developer With Zero Level of Experience 
         in Web Designing and Development,
        producting the Quality Work
        </span>
    </div>
    <button className="button i-button">Hire me</button>
    <div className="i-icons">
       <a href='https://github.com/'>
       <img src={Github} alt=""/>
       </a>
       <a href='https://www.linkedin.com/in/prantik-de-963a17215/'>
       <img src={LinkedIn} alt=""/>
       </a>
        <a href='https://www.instagram.com/deprantik/'>
        <img src={Instagram} alt=""/>
        </a>
    </div>
   </div>
    <div className="i-right">
        <img src={Vector1} alt=""  />
        <img src={Vector2} alt=""  />
        <img src={Boy} alt=""  />
        <motion.img initial={{left:"-36%"}} 
        whileInView={{left:"-24%"}} 
        transition={transition}  
        src={glassesimoji} 
        alt=""/>
        <motion.div initial={{top:'-4%',left:"74%"}} 
              whileInView={{left:"68%"}} 
              transition={transition}  
             className='float' style={{top:"-4%",left:"68%"}}>
             <FloatingDiv image={Crown} txt1='Web' txt2="Developer" />
        </motion.div>
        <motion.div initial={{left:'9rem',top:'18rem'}} 
              whileInView={{left:"0rem"}} 
              transition={transition} 
        className="float" style={{top:"18rem",left:"0rem"}}>
            <FloatingDiv image={thumbup} txt1='Best Design' tx2='Award'/>
        </motion.div>
        <div className='blur'></div>
        <div className="blur" style={{
            background:'#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}>

        </div>
    </div>
    </div>
  )
}

export default Intro