import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Works = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="works">
         <div className="awesome">
          <span style={{color:darkMode?'white':'black'}}>Works For All These</span>
          <span>Brands Client</span>
          <spane>Lorem ispum is simply dummy text of printing Lorem 
          <br/>
          is pum is simpley dummy text of printing
          <br/>
          is pum is simply dummy text of printing text of printing
          <br/>
          Lorem ispum is simply dummy text
          </spane>
          <div className="button s-button">Hire me</div>
          <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
        <motion.div initial={{rotate:45}} whileInView={{rotate:0}} viewport={{margin:'-40px'}}
          transition={{duration:3.5,type:'spring'}}
        className="w-maincircle">
         <div className="w-secCircle">
         <img src={Upwork} alt=""></img>
        </div>
        <div className="w-secCircle">
            <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Amazon} alt="" />
        </div>{" "}
        <div className="w-secCircle">
            <img src={Shopify} alt=""  />
        </div>
        <div className="w-secCircle">
              <img src={Facebook} alt="" />
        </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works