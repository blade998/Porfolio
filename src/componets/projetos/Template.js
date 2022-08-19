import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react'
import './Template.css'
import google from './imagens/google.png'
import imc from './imagens/imc.png'
import starbucks from './imagens/starbucks.jpg'
import medic from './imagens/medic.png'
import calc from './imagens/calculadora.png'
import port from './imagens/Portfolio.png'




export  const Proje = ()=> {


const Containert = styled.div`
color: white;
display: flex;
height: 90vh;
width: 100%;
align-items:center;
justify-content:center;
flex-direction: column;
`





    return(
        <Containert>
         <div className="Tilt" id="projetos"><h1>PROJETOS</h1>
        
         
         </div>
           <div className="body-carrosel">
           <Swiper
      spaceBetween={5}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><a href="https://github.com/blade998/Copia-do-layoult-do-google">
        <h2 className="port-titles">Clone<br/> Google</h2>
        <img src={google} className='imgs'/>
        </a></SwiperSlide>
      <SwiperSlide>
      <a href="https://calculadora-imc-em-react.vercel.app/">
        <h2 className="port-titles">Calculadora<br/> Imc React</h2>
        <img src={imc} className='imgs'/>
        </a>
      </SwiperSlide>
      <SwiperSlide><a href="https://www.linkedin.com/posts/igor-barbosa-dos-santos-b8977720a_frontend-ugcPost-6948790038700642304-LkzV?utm_source=linkedin_share&utm_medium=member_desktop_web">
        <h2 className="port-titles">Site clone<br/> starbucks</h2>
        <img src={starbucks} className='imgs'/>
        </a></SwiperSlide>
      <SwiperSlide>
      <a href="https://www.linkedin.com/posts/igor-barbosa-dos-santos-b8977720a_frontend-activity-6948792238797656064-blIH?utm_source=linkedin_share&utm_medium=member_desktop_web">
        <h2 className="port-titles">Site Centro<br/> médico</h2>
        <img src={medic} className='imgs'/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://calculadora-react-js-mu.vercel.app/">
        <h2 className="port-titles">Calculadora<br/>  React</h2>
        <img src={calc} className='imgs'/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="">
        <h2 className="port-titles">Portfolio <br/> React</h2>
        <img src={port} className='imgs'/>
        </a>
      </SwiperSlide>
      
    </Swiper>
           </div>
        </Containert>
    )
}