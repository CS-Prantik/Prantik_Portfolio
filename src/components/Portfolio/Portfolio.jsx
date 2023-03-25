import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/Ecommerce.png'
import HOC from '../../img/hoc.png'
import Spotify from '../../img/spotify.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color:darkMode?'white':'black'}}>Recent Projects</span>
        <span>Slides</span>

        {/* slider */}
<Swiper 
spaceBetween={10} 
slidesPerView={2} 
grabCursor={true} 
className='portfolio-slider'>
    <SwiperSlide>
        <img src={Sidebar} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Ecommerce} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={HOC} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Spotify} alt="" />
    </SwiperSlide>
    
</Swiper>
    </div>
  )
}

export default Portfolio