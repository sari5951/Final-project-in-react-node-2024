import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Order.css'
import Page1Baby from '../img/בריתה.png';
import Page1BatMitzva from '../img/דבורי-שנקר.png';
import Page1BarMitzva from '../img/בר מצוה.png';
import Page1shivuk from '../img/שייווק.png';
import Page1irusin from '../img/משפחת-שיש.png';
import Page1birthday from '../img/יומהולדת.png';
import { AddOrdert } from "../../../api/returnListCust.api";



export const Order = () => {
    const [hoveredImg, setHoveredImg] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [kindEvent, setkindEvent] = useState();
    const handaleSubmit = (event) => {
        event.preventDefault();
        let newOrder = {
            Email: email,
            Name: name,
            Phone: phone,
            KindEvent: kindEvent
        }
        AddOrdert(newOrder);
       
        setEmail('');
        setName('');
        setPhone('');
        setkindEvent('');

    

    };
    return (
        <div>
            <h2 id="h2">קולקציית הברים המתוקים שלנו:</h2>
            <p>בואו להזניק את האירוע שלכם עם בר מתוק וממותג, שיקפיץ כל אירוע לליגה הבאה.<br>
            </br>הבארים שלנו מעוצבים וממותגים עם אקססוריז מלא סטייל וניחוח יוקרתי ותואם לאופי האירוע,<br>
                </br>מה שהופך את האירוע שלכם ליוצא דופן ומעורר השראה.</p>
            {/* תמונות להזמנות */}
            <div id='ImgOrder1'>
                <div className="ImgContainer">
                    <img className='circleOrder' src={Page1Baby} alt="img1" />
                    <p>ברית</p>
                </div>
                <div className="ImgContainer">
                    <img className='circleOrder' src={Page1BatMitzva} alt="img2" />
                    <p>בת מצוה</p>
                </div>
                <div className="ImgContainer">


                    <img className='circleOrder' src={Page1BarMitzva} alt="img3" />
                    <p>בר מצוה</p>
                </div>
            </div >
            <div id="ImgOrder2">

                <div className="ImgContainer">
                    <img className='circleOrder' src={Page1shivuk} alt="img4" />
                    <p>ארוע עסקי</p>
                </div>
                <div className="ImgContainer">

                    <img className='circleOrder' src={Page1irusin} alt="img5" />
                    <p>אירוסין</p>
                </div>
                <div className="ImgContainer">

                    <img className='circleOrder' src={Page1birthday} alt="img6" />
                    <p>יום הולדת</p>
                </div>
            </div>





            <h2>רוצים לרגש ולהתרגש<br></br>
                באירוע פרימיום ממותג ?
                <br></br>
                קבעו פגישה עם מעצבת האירועים שלנו ממש עכשיו!
            </h2>
            <form id="Form" onSubmit={handaleSubmit}>

                <label><input type="text" className="Formbranch" value={name} onChange={(e) => setName(e.target.value)} required placeholder="שם פרטי" /></label>
                <label><input type="email" className="Formbranch" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="מייל" /></label>
                <label><input type="text" className="Formbranch" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="טלפון" /></label>
                <label><input type="text" className="Formbranch" value={kindEvent} onChange={(e) => setkindEvent(e.target.value)} required placeholder="סוג הארוע" /></label>
                <br></br>
                <br></br>
                <button type="submit" className="Formbranch" id="ok">כזה ארוע אני רוצה!💗</button>



            </form>
            {/* <form onSubmit={handaleSubmit} style={{ backgroundColor: '#956B57', padding: '20px', borderRadius: '10px' }}>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <span style={{ color: '#E55C66', marginRight: '5px' }}>👤</span>
    <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: '5px', borderRadius: '5px' }} />
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <span style={{ color: '#E55C66', marginRight: '5px' }}>✉️</span>
    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '5px', borderRadius: '5px' }} />
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <span style={{ color: '#E55C66', marginRight: '5px' }}>📞</span>
    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required style={{ width: '100%', padding: '5px', borderRadius: '5px' }} />
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <span style={{ color: '#E55C66', marginRight: '5px' }}>🎉</span>
    <input type="text" value={kindEvent} onChange={e => setkindEvent(e.target.value)} required style={{ width: '100%', padding: '5px', borderRadius: '5px' }} />
  </label>

  <br />
  <br />

  <button type="submit" style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>I want such an event! 💗</button>
</form> */}



        </div>
    )
}