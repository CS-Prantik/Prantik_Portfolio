import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilepic2 from "../../img/profile2.jpg"
import profilepic3 from "../../img/profile3.jpg"
import profilepic4 from "../../img/profile4.jpg"
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonials = () => {
     const clients=[
        {
            img:profilePic1,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            img:profilepic2,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },
        {
            img:profilepic3,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"

        },
        {
            img:profilepic4,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"

        }
     ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients Always get</span>
            <span> Exceptional Work</span>
            <span> From Me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
    {/* slider */}
  <Swiper
     modules={[Pagination]}
     slidesPerView={2}
     pagination={{clickable: true}}>
      {
        clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}>
                <div className="testimonials">
                <img src={client.img} alt=""  />
                <span>{client.review}</span>
                </div>
                </SwiperSlide>
            )
        })
      }
    </Swiper>
    </div>
  )
}

export default Testimonials