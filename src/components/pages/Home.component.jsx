import React from "react";
import {Link} from 'react-router-dom';
import { Title } from "../pages/Header.component";
import './Home.css';
import ImgHome from '../img/תמונת עמוד הבית.jpg';
import ImgEvent from '../img/event.jpg';
import Img1 from '../img/בית 1.jpg';
import Img2 from '../img/בית 2.jpg';
import Img3 from '../img/בית 3.jpg';
import Img4 from '../img/בית 4.jpg';
import Img5 from '../img/בית 5.jpg';
import Img6 from '../img/בית 6.jpg';

export const HomePage=()=>{
    return(
        <div>
             {/* <img id="HomeImg" src={ImgHome} alt="home img"></img>  */}
            <img id="HomeImg" src={ImgHome} alt="home img" style={{ width: '100vw', display: 'block', margin: '0 auto' }}></img>

            
            <h1 id="h1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>...לרגש ולהתרגש</h1> 
            {/* <h1 id="h1" >לרגש ולהתרגש...</h1>  */}

       {/* <div style={{ position: 'relative' }}>
    <img id="HomeImg" src={ImgHome} alt="home img" style={{ width: '100vw', display: 'block', margin: '0 auto' }}></img>
    <h1 style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', zIndex: '4' }}>to excite and be excited...</h1>
</div> */}


            <br></br>
            <br></br>
            <img  src={ImgEvent} alt="event img"></img>
            <br></br>
            <br></br>
            <div id='HomePage1'>
            <img  src={Img1} alt="event img"></img>
            <img  src={Img2} alt="event img"></img>
            <img  src={Img3} alt="event img"></img>
            
            </div>
            <div id='HomePage2'>
            <img  src={Img4} alt="event img"></img>
            <img  src={Img5} alt="event img"></img>
            <img  src={Img6} alt="event img"></img>
            </div>
            

            
            

            
        </div>
        
    )
} 