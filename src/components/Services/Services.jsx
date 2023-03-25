import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Services = () => {
   const transition={duration:1,type:'spring'}
   const theme=useContext(themeContext)
   const darkMode=theme.state.darkMode
  return (
     <div className="services" id='Services'>
        <div className="awesome">
          <span style={{color:darkMode?'white':'black'}}>My Awesome</span>
          <span>Services</span>
          <spane>Lorem ispum is simply dummy text of printing Lorem 
          <br/>
          is pum is simpley dummy text of printing
          </spane>
          <div className="button s-button">Download CV</div>
          <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="cards">
         <motion.div  
         whileInView={{left:'14rem'}}
         initial={{left:'25%'}}
         transition={transition}
         style={{left:'14rem'}}>
            <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma,Sketch,Photoshop,Adobe"}
            />
         </motion.div>
         <motion.div    initial={{left: '-11rem', top: "12rem",}}
        whileInView={{left: "-4rem" }}
        transition={transition} style={{top:'12rem',left:"-4rem"}}>
           <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css,Javascript,React"}
           />
         </motion.div>
         <motion.div initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
         style={{top:"19rem",left:"12rem"}}>
            <Card 
                emoji={Humble}
                heading={"UI/UX"}
                detail={"Lorem Ispum text are usually use"}
            />
         </motion.div>
         <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
     </div>
  )
}

export default Services